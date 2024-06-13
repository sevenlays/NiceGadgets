/* eslint-disable max-len */
import { useEffect, useState } from 'react';
// import iconLeft from '../../assets/icons/ArrowLeftBold.svg';
import iconFav from '../../assets/icons/Favourites.svg';
import styles from './ItemDetailsPage.module.scss';
import classNames from 'classnames';
import { Button } from '../../UI';
import { ProductParams } from '../../components/ProductCard/ProductParams/ProductParams';
import { makeColorDarker } from '../../utils/makeColorDarker';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ProductGallery.scss';
import { SingleParam } from '../../components/ProductCard/ProductParams/SingleParam/SingleParam';
import getHexFromColorName from '../../utils/LiteralColorToHex';
import { useLocation, useParams } from 'react-router-dom';
import { ProductDetail } from '../../types/ProductDetail';
import { FullPrice } from '../../components/ProductCard/PriceWithoutDiscount/FullPrice';
import { BreadcrumbsComponent } from '../../UI/Breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '../../types/Breadcrumb';
import { PATHS } from '../../constants';
import { SliderSection } from '../../components';
import { Product } from '../../types/Product';
import { useSelector } from 'react-redux';
import {
  selectAccessories,
  selectAllProducts,
  selectPhones,
  selectTablets,
} from '../../redux';
import { getLimitedCategoryProduct } from '../../services/filteForSliders';
import { createCustomProductId } from '../../utils/createCustomProductId';
import { getCategoryApiEndpoint } from '../../utils/getCategoryApiEndpoint';
import { BAckButton } from '../../UI/Backbutton/BackButton';

type Orientation = 'bottom' | 'left';

const defaultProduct: ProductDetail = {
  id: '',
  category: '',
  namespaceId: '',
  name: '',
  capacityAvailable: ['38mm', '42mm'],
  capacity: '',
  priceRegular: 0,
  priceDiscount: 0,
  colorsAvailable: ['black'],
  color: 'black',
  images: [''],
  description: [
    {
      title: '',
      text: '',
    },
  ],
  screen: '',
  resolution: '',
  processor: '',
  ram: '',
  cell: [''],
  camera: '',
  zoom: '',
};

export const ItemDetailsPage = () => {
  const [product, setProduct] = useState<ProductDetail>(defaultProduct);
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);
  const [color, setColor] = useState(product?.color);
  const [capacity, setCapacity] = useState(product?.capacity);
  const [orientation, setOrientation] = useState<Orientation>('bottom');

  // const navigate = useNavigate();

  const { pathname } = useLocation();

  const URL = getCategoryApiEndpoint(pathname, '/react_phone-catalog/api/');

  /* create products for slider */

  const phones = useSelector(selectPhones);
  const tablets = useSelector(selectTablets);
  const accessories = useSelector(selectAccessories);

  useEffect(() => {
    setOtherProducts(() =>
      getLimitedCategoryProduct(pathname, 8, {
        phones,
        tablets,
        accessories,
      }),
    );
  }, [pathname, phones, tablets, accessories]);

  /* Create product */

  const allProducts = useSelector(selectAllProducts);
  const newCustomProductId = createCustomProductId(allProducts, product, 8, 5);

  /* find product */

  const { phoneID, tabletID, accessoriesID } = useParams<{
    phoneID?: string;
    tabletID?: string;
    accessoriesID?: string;
  }>();

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(
          (prod: ProductDetail) =>
            prod.id === phoneID ||
            prod.id === tabletID ||
            prod.id === accessoriesID,
        );

        if (foundProduct) {
          setProduct(foundProduct);
        }
      })
      .catch(() => {});
  }, [pathname, phoneID, tabletID, accessoriesID, URL]);

  useEffect(() => {
    const handleResize = () => {
      const size = window.innerWidth;

      if (size > 650) {
        setOrientation('left');
      } else {
        setOrientation('bottom');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /* make images for gallery */

  const productImage = (): { original: string; thumbnail: string }[] => {
    return product.images.map(image => ({
      original: image,
      thumbnail: image,
      originalHeight: 450,
      thumbnailHeght: 100,
    }));
  };

  const images = productImage();

  /* breadcrumbs */

  const breadcrumbsData: Breadcrumb[] = [
    { label: product.id, path: PATHS.ACCESSORIES.LIST },
  ];

  return (
    <div className={styles.page__container}>
      <div className={styles.breadcrumbs}>
        <BreadcrumbsComponent breadcrumbs={breadcrumbsData} />
      </div>
      <BAckButton />
      <h3 className={styles.title}>{product.name}</h3>
      <div className={styles.product}>
        <div className={styles.product__gallary}>
          <ImageGallery
            items={images}
            showNav={false}
            thumbnailPosition={orientation}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </div>
        <div className={styles.product__settings}>
          <div className={styles.colors}>
            <div className={styles.colors__wrapper}>
              <p>Available colors</p>
              <div className={styles.product__id}>ID: {newCustomProductId}</div>
            </div>
            <ul className={styles.colors__list}>
              {product.colorsAvailable.map(colorFromServer => {
                const hexColor = getHexFromColorName(colorFromServer);
                const darkerColor = makeColorDarker(hexColor, 10);

                return (
                  <li
                    key={colorFromServer}
                    className={classNames(styles.colors__outer, {
                      [styles.colors__outer_active]: color === colorFromServer,
                    })}
                  >
                    <span
                      aria-label={colorFromServer}
                      className={styles.colors__inner}
                      style={{ backgroundColor: darkerColor }}
                      onClick={() => setColor(colorFromServer)}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.capacity}>
            <p>Select capacity</p>
            <ul className={styles.capacity__list}>
              {product.capacityAvailable.map(capacityFromServer => (
                <li key={capacityFromServer}>
                  <span
                    className={classNames(styles.capacity__item, {
                      [styles.capacity__item_active]:
                        capacity === capacityFromServer,
                    })}
                    onClick={() => setCapacity(capacityFromServer)}
                  >
                    {capacityFromServer}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.price}>
            <div className={styles.price__discount}>
              ${product.priceDiscount}
            </div>
            <div className={styles.price__regular}>
              <FullPrice fullPrice={product.priceRegular} />
            </div>
          </div>

          <div className={styles.buttons}>
            <div className={styles.buttons__addToCard}>
              <Button
                type="primary"
                size={{ height: 48 }}
                onClick={() => alert('Button clicked!')}
              >
                Add to cart
              </Button>
            </div>
            <div className={styles.buttons__addToFavourites}>
              <Button
                type="icon"
                size={{ height: 48 }}
                onClick={() => alert('Button clicked!')}
              >
                <img src={iconFav} alt="Icon" />
              </Button>
            </div>
          </div>

          <div className={styles.params}>
            <ProductParams>
              <SingleParam name="Screen" param={product.screen} />
              <SingleParam name="Resolution" param={product.resolution} />
              <SingleParam name="Processor" param={product.processor} />
              <SingleParam name="RAM" param={product.ram} />
            </ProductParams>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <h4 className={styles.about__title}>About</h4>
        <div className={styles.divider}></div>
        <div className={styles.description}>
          {product.description.map(description => (
            <div className={styles.description__item} key={description.title}>
              <h5 className={styles.description__title}>{description.title}</h5>
              <p className={styles.description__body}>{description.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tech}>
        <h4 className={styles.tech__title}>Tech specs</h4>
        <div className={styles.divider}></div>

        <div className={styles.params}>
          <ProductParams techSpecs={true}>
            <SingleParam name="Screen" param={product.screen} />
            <SingleParam name="Resolution" param={product.resolution} />
            <SingleParam name="Processor" param={product.processor} />
            <SingleParam name="RAM" param={product.ram} />
            <SingleParam name="Built in memory" param={product.capacity} />
            <SingleParam name="Camera" param={product.camera} />
            <SingleParam name="Zoom" param={product.zoom} />
            <SingleParam name="Cell" param={product.cell.join(', ')} />
          </ProductParams>
        </div>
      </div>

      <div className={styles.slider}>
        {otherProducts.length > 0 && (
          <SliderSection
            title="You may also like"
            prevButtonClass="buttonHotPrice-prev"
            nextButtonClass="buttonHotPrice-next"
            arrayToMap={otherProducts}
            withDiscount={true}
          />
        )}
      </div>
    </div>
  );
};
