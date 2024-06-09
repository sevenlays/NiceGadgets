/* eslint-disable max-len */
import { useState } from 'react';
import iconLeft from '../../assets/icons/ArrowLeftBold.svg';
import iconFav from '../../assets/icons/Favourites.svg';
import styles from './ItemDetailsPage.module.scss';
import classNames from 'classnames';
import { Button } from '../../UI';
import { ProductParams } from '../../components/ProductCard/ProductParams/ProductParams';

const item = {
  id: 'apple-iphone-11-128gb-black',
  category: 'phones',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.webp',
    'img/phones/apple-iphone-11/black/01.webp',
    'img/phones/apple-iphone-11/black/02.webp',
    'img/phones/apple-iphone-11/black/03.webp',
    'img/phones/apple-iphone-11/black/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const ItemDetailsPage = () => {
  // https://github.com/xiaolin/react-image-gallery

  const [color, setColor] = useState(item.color);
  const [capacity, setCapacity] = useState(item.capacity);

  console.log(color);

  return (
    <div className={styles.page__container}>
      <div className={styles.breadcrumbs}>breadcrumbs</div>
      <a href="#" className={styles.back}>
        <img src={iconLeft} /> Back
      </a>
      <h3 className={styles.title}>{item.name}</h3>
      <div className={styles.product}>
        <div className={styles.product__gallary}></div>
        <div className={styles.product__settings}>
          <div className={styles.colors}>
            <div className={styles.colors__wrapper}>
              <p>Available colors</p>
              <div className={styles.product__id}>ID: 802390</div>
            </div>
            <ul className={styles.colors__list}>
              {item.colorsAvailable.map(colorFromServer => (
                <li
                  key={colorFromServer}
                  className={classNames(styles.colors__outer, {
                    [styles.colors__outer_active]: color === colorFromServer,
                  })}
                >
                  <span
                    // href="#"
                    aria-label={colorFromServer}
                    className={styles.colors__inner}
                    style={{ backgroundColor: colorFromServer }}
                    onClick={() => setColor(colorFromServer)}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.capacity}>
            <p>Select capacity</p>
            <ul className={styles.capacity__list}>
              {item.capacityAvailable.map(capacityFromServer => (
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
            <div className={styles.price__discount}>${item.priceDiscount}</div>
            <div className={styles.price__regular}>${item.priceRegular}</div>
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

          <div className="params">
            <ProductParams phoneParams={item} />
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <h4 className={styles.about__title}>About</h4>
        <div className={styles.divider}></div>
        <div className={styles.description}>
          {item.description.map(description => (
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
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>Screen</div>
            <div className={styles.params__value}>{item.screen}</div>
          </div>
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>Resolution</div>
            <div className={styles.params__value}>{item.resolution}</div>
          </div>
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>Processor</div>
            <div className={styles.params__value}>{item.processor}</div>
          </div>
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>RAM</div>
            <div className={styles.params__value}>{item.ram}</div>
          </div>
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>Built in memory</div>
            <div className={styles.params__value}>{item.capacity}</div>
          </div>
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>Camera</div>
            <div className={styles.params__value}>{item.camera}</div>
          </div>
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>Zoom</div>
            <div className={styles.params__value}>{item.zoom}</div>
          </div>
          <div className={styles.params__wrapper}>
            <div className={styles.params__name}>Cell</div>
            <div className={styles.params__value}>{item.cell}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
