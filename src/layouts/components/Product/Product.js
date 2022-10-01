import React, { useEffect, useRef, useState } from 'react';

import styles from './Product.module.scss';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Button from '~/components/Button';
import Star from '~/components/Star';

import images from '~/assets/img';
import Image from '~/components/Image';
import Input from '~/components/Input';
import ZoomImage from './ZoomImage';

const cx = classNames.bind(styles);
const gx = classNames.bind(GlobalStyles);

function Product({ children }) {
    const [amountChange, setAmountChange] = useState(1);
    const [zoomClick, setZoomClick] = useState('close');
    const [srcImage, setSrcImage] = useState('');

    var posCurrentListImg = 0;
    const section = [
        {
            key: 1,
            src: 'https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-thun-cracken-bad-habbit%2F1-8-600x595.jpeg?alt=media&token=e9c5e4ad-857b-4301-a730-81be3cb558e0',
        },
        {
            key: 2,
            src: 'https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp',
        },
        {
            key: 3,
            src: 'https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fbalo-degrey-moi-do%2F2-600x1034.jpeg?alt=media&token=b4f769c5-d8a0-4bb8-916e-94edad527620',
        },
        {
            key: 4,
            src: 'https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-thun-cracken-bad-habbit%2F1-8-600x595.jpeg?alt=media&token=e9c5e4ad-857b-4301-a730-81be3cb558e0',
        },
        {
            key: 5,
            src: 'https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp',
        },
        {
            key: 6,
            src: 'https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fbalo-degrey-moi-do%2F2-600x1034.jpeg?alt=media&token=b4f769c5-d8a0-4bb8-916e-94edad527620',
        },
        {
            key: 7,
            src: 'https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fbobui-drunk%2F1-17.jpeg?alt=media&token=60689573-7bb5-4551-9d09-a7bd270e7530',
        },
    ];
    const section1 = [
        {
            key: 1,
        },
        {
            key: 2,
        },
        {
            key: 3,
        },
        {
            key: 4,
        },
        {
            key: 5,
        },
        {
            key: 6,
        },
        {
            key: 7,
        },
        {
            key: 8,
        },
        {
            key: 9,
        },
        {
            key: 10,
        },
        {
            key: 11,
        },
        {
            key: 12,
        },
        {
            key: 13,
        },
        {
            key: 14,
        },
        {
            key: 15,
        },
        {
            key: 16,
        },
        {
            key: 17,
        },
    ];

    const lengthImages = 7;
    const totalClickSubImage = lengthImages / 5 + 1;
    var countClickSubImage = 0;

    var percentImg = 0;
    const [percentImgStart, setPercentImgStart] = useState(0);
    var indexSave = 0;

    //Size, color
    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);

    const handleOnClickColor = (el) => {
        if (!color.includes(el.target)) {
            setColor(color.concat([el.target]));
        }
        // eslint-disable-next-line array-callback-return
        color.map((value, index) => {
            value.classList.remove(cx('active--clothes'));
        });

        el.target.classList.add(cx('active--clothes'));
    };

    const handleOnClickSize = (el) => {
        if (!size.includes(el.target)) {
            setSize(size.concat([el.target]));
        }
        // eslint-disable-next-line array-callback-return
        size.map((value, index) => {
            value.classList.remove(cx('active--clothes'));
        });

        el.target.classList.add(cx('active--clothes'));
    };

    const clearSelectStyles = () => {
        // eslint-disable-next-line array-callback-return
        size.map((value, index) => {
            value.classList.remove(cx('active--clothes'));
        });

        // eslint-disable-next-line array-callback-return
        color.map((value, index) => {
            value.classList.remove(cx('active--clothes'));
        });
    };

    //Description, Additional information, Review

    const refIntroduction = useRef([]);

    const handleOnClickTitleIntroduction = (index, el) => {
        var scrollHeightDescriptions = [
            refIntroduction.current[0].scrollHeight,
            refIntroduction.current[1].scrollHeight,
            refIntroduction.current[2].scrollHeight,
        ];
        if (refIntroduction.current[index].className === cx('info-title', 'close')) {
            // eslint-disable-next-line array-callback-return
            refIntroduction.current.map((value, indexSub) => {
                refIntroduction.current[indexSub].classList.remove(cx('open'));
                refIntroduction.current[indexSub].classList.add(cx('close'));
            });
            refIntroduction.current[index].classList.remove(cx('close'));
            refIntroduction.current[index].classList.add(cx('open'));
            refIntroduction.current[index].style.maxHeight = scrollHeightDescriptions[index] + 'px';
        } else {
            if (
                el.target.className === cx('info-body-heading') ||
                el.target.className === cx('info-body-heading-label')
            ) {
                refIntroduction.current[index].style.maxHeight = '52px';
                refIntroduction.current[index].classList.remove(cx('open'));
                refIntroduction.current[index].classList.add(cx('close'));
            }
        }
    };
    // eslint-disable-next-line no-const-assign
    refIntroduction.current = [];
    const pushRefIntroduction = (el) => {
        if (el && !refIntroduction.current.includes(el)) {
            refIntroduction.current.push(el);
        }
    };

    //Image
    const refSubImages = useRef();
    const refImageSub = useRef();
    const refSubImage = useRef([]);
    const refLargeImage = useRef([]);
    const refLargeImg = useRef([]);
    const refImageShow = useRef([]);

    // eslint-disable-next-line no-const-assign
    refSubImage.current = [];
    // eslint-disable-next-line no-const-assign
    refLargeImage.current = [];
    // eslint-disable-next-line no-const-assign
    refLargeImg.current = [];
    // eslint-disable-next-line no-const-assign
    refImageShow.current = [];

    const pushRefImageShow = (el) => {
        if (el && !refImageShow.current.includes(el)) {
            refImageShow.current.push(el);
        }
    };

    const pushRefLargeImage = (el) => {
        if (el && !refLargeImage.current.includes(el)) {
            refLargeImage.current.push(el);
        }
    };

    const pushRefSubImage = (el) => {
        if (el && !refSubImage.current.includes(el)) {
            refSubImage.current.push(el);
        }
    };

    const pushRefLargeImg = (el) => {
        if (el && !refLargeImg.current.includes(el)) {
            refLargeImg.current.push(el);
            console.log(1);
        }
    };

    //Sub List Image
    const handleClickLeftSubImage = () => {
        if (posCurrentListImg < 0) {
            posCurrentListImg += 124;
            refSubImages.current.style.transform = 'translateX(' + posCurrentListImg + 'px)';
            countClickSubImage--;
        }
    };
    const handleClickRightSubImage = () => {
        if (countClickSubImage <= totalClickSubImage) {
            posCurrentListImg -= 124;
            refSubImages.current.style.transform = 'translateX(' + posCurrentListImg + 'px)';
            countClickSubImage++;
        }
    };
    useEffect(() => {
        //Large Image
        // eslint-disable-next-line react-hooks/exhaustive-deps
        percentImg = 0;
        // eslint-disable-next-line array-callback-return
        refLargeImage.current.map((value, index) => {
            refLargeImage.current[index].style.left = percentImg + '%';
            percentImg += 100;
        });
    }, []);
    const handleClickLeftLargeImage = () => {
        if (percentImgStart < 0) {
            setPercentImgStart(percentImgStart + 100);
            percentImg = percentImgStart;
            // eslint-disable-next-line array-callback-return
            refLargeImage.current.map((value, index) => {
                refLargeImage.current[index].style.left = percentImg + '%';
                if (percentImg === 0) {
                    if (index + 1 < lengthImages)
                        refSubImage.current[index + 1].classList.remove(cx('info-main-image-sub-item--active'));
                    refSubImage.current[index].classList.add(cx('info-main-image-sub-item--active'));
                    // refSubImage[index].id = 'img-zoom';
                    if (refSubImages.current.clientWidth > refImageSub.current.clientWidth) {
                        if (index > 0) {
                            if ((lengthImages - index + 1) * 124 >= refImageSub.current.clientWidth) {
                                indexSave = index;
                                posCurrentListImg = -124 * (indexSave - 1);
                            } else {
                                posCurrentListImg = -(
                                    124 * (indexSave - 1) +
                                    108 -
                                    (refImageSub.current.clientWidth - 124 * (lengthImages - indexSave))
                                );
                            }
                            if (refImageSub.current.clientWidth < 124 * 3) posCurrentListImg -= 124 / 2;
                            refSubImages.current.style.transform = 'translateX(' + posCurrentListImg + 'px)';
                        }
                    }
                }
                percentImg += 100;
            });
        } else {
            setPercentImgStart(percentImgStart - (lengthImages - 1) * 100);
            // percentImgStart = -(lengthImages - 1) * 100;
            percentImg = percentImgStart;
            // eslint-disable-next-line array-callback-return
            refLargeImage.current.map((value, index) => {
                refLargeImage.current[index].style.left = percentImg + '%';
                percentImg += 100;
            });
            refSubImage.current[0].classList.remove(cx('info-main-image-sub-item--active'));
            refSubImage.current[lengthImages - 1].classList.add(cx('info-main-image-sub-item--active'));
            if (refSubImages.current.clientWidth > refImageSub.current.clientWidth) {
                posCurrentListImg = -(
                    124 * (indexSave - 1) +
                    108 -
                    (refImageSub.current.clientWidth - 124 * (lengthImages - indexSave))
                );
                if (refImageSub.current.clientWidth < 124 * 3) posCurrentListImg -= 124 / 2;
                refSubImages.current.style.transform = 'translateX(' + posCurrentListImg + 'px)';
            }
        }
    };
    const handleClickRightLargeImage = () => {
        if (percentImgStart > -((lengthImages - 1) * 100)) {
            setPercentImgStart(percentImgStart - 100);
            // percentImgStart -= 100;
            percentImg = percentImgStart;
            // eslint-disable-next-line array-callback-return
            refLargeImage.current.map((value, index) => {
                refLargeImage.current[index].style.left = percentImg + '%';
                if (percentImg === 0) {
                    if (index - 1 >= 0) {
                        refSubImage.current[index - 1].classList.remove(cx('info-main-image-sub-item--active'));
                    }
                    refSubImage.current[index].classList.add(cx('info-main-image-sub-item--active'));
                    if (refSubImages.current.clientWidth > refImageSub.current.clientWidth) {
                        if (index > 0) {
                            if ((lengthImages - index + 1) * 124 >= refImageSub.current.clientWidth) {
                                indexSave = index;
                                posCurrentListImg = -124 * (indexSave - 1);
                            } else {
                                posCurrentListImg = -(
                                    124 * (indexSave - 1) +
                                    108 -
                                    (refImageSub.current.clientWidth - 124 * (lengthImages - indexSave))
                                );
                            }
                            if (refImageSub.current.clientWidth < 124 * 3) posCurrentListImg -= 124 / 2;
                            refSubImages.current.style.transform = 'translateX(' + posCurrentListImg + 'px)';
                        }
                    }
                }
                percentImg += 100;
            });
        } else {
            // percentImgStart = 0
            setPercentImgStart(0);
            percentImg = percentImgStart;

            // eslint-disable-next-line array-callback-return
            refLargeImage.current.map((value, index) => {
                refLargeImage.current[index].style.left = percentImg + '%';
                percentImg += 100;
            });
            refSubImage.current[lengthImages - 1].classList.remove(cx('info-main-image-sub-item--active'));
            refSubImage.current[0].classList.add(cx('info-main-image-sub-item--active'));
            if (refSubImages.current.clientWidth > refImageSub.current.clientWidth) {
                posCurrentListImg = 0;
                refSubImages.current.style.transform = 'translateX(' + posCurrentListImg + 'px)';
            }
        }
    };
    // Sub Image
    const handleClickSubImage = (index) => {
        // el.target.classList.add(cx('info-main-image-sub-item--active'))
        setPercentImgStart(-index * 100);
        // percentImgStart = -index * 100;
        percentImg = percentImgStart;
        // eslint-disable-next-line array-callback-return
        refLargeImage.current.map((value, index1) => {
            refLargeImage.current[index1].style.left = percentImg + '%';
            percentImg += 100;
        });
        // eslint-disable-next-line array-callback-return
        refSubImage.current.map((value, indexSub) => {
            if (indexSub !== index)
                refSubImage.current[indexSub].classList.remove(cx('info-main-image-sub-item--active'));
            else refSubImage.current[index].classList.add(cx('info-main-image-sub-item--active'));
        });
        if (refSubImages.current.clientWidth > refImageSub.current.clientWidth) {
            if (index > 0) {
                if ((lengthImages - index + 1) * 124 >= refImageSub.current.clientWidth) {
                    indexSave = index;
                    posCurrentListImg = -124 * (indexSave - 1);
                } else {
                    posCurrentListImg = -(
                        124 * (indexSave - 1) +
                        108 -
                        (refImageSub.current.clientWidth - 124 * (refSubImage.length - indexSave))
                    );
                }
                if (refImageSub.current.clientWidth < 124 * 3) posCurrentListImg -= 124 / 2;
                refSubImages.current.style.transform = 'translateX(' + posCurrentListImg + 'px)';
            }
        }
    };

    //Hover zoom
    var scaleZoom = 3;
    // var mulNumverY = (2 ** (scaleZoom) + 2) * 10 180
    const handleOnMouseMove = (event, index) => {
        var imgZoom = document.querySelectorAll('.' + cx('info-main-image-show'));
        var clientX = 0,
            clientY = 0,
            mWidth = 0,
            mHeight = 0;
        clientX = event.clientX - refLargeImage.current[index].offsetLeft;
        clientY = event.clientY - refLargeImage.current[index].offsetTop;

        mWidth = refLargeImage.current[index].offsetWidth;
        mHeight = refLargeImage.current[index].offsetHeight;

        clientX = -(clientX / mWidth - 0.6) * 180;
        clientY = -(clientY / mHeight - 0.8) * 210;
        imgZoom[index].style.transform = 'translate(' + clientX + '%,' + clientY + '%) scale(' + scaleZoom + ')';
    };
    const handleOnMouseLeave = (index) => {
        var imgZoom = document.querySelectorAll('.' + cx('info-main-image-show'));
        imgZoom[index].style.transform = 'none';
    };

    // Related Products
    const refRelatedSmall = useRef();
    const refLengthRelated = useRef([]);

    // eslint-disable-next-line no-const-assign
    refLengthRelated.current = [];

    const [countPosIn, setCountPosIn] = useState(0);
    const [countPosDe, setCountPosDe] = useState(-1);

    const pushRefLengthRelated = (el) => {
        if (el && !refLengthRelated.current.includes(el)) {
            refLengthRelated.current.push(el);
        }
    };

    const handleClickRelatedLeft = () => {
        if (countPosIn > 0 && countPosDe >= 0) {
            refRelatedSmall.current.style.transform =
                'translateX(-' + refRelatedSmall.current.clientWidth * countPosDe + 'px)';
            setCountPosIn(countPosIn - 1);
            setCountPosDe(countPosDe - 1);
        }
    };

    const handleClickRelatedRight = () => {
        var widthRelated = document.querySelector('.' + cx('related-products-item')).clientWidth;
        var allRelated = widthRelated * refLengthRelated.current.length;
        var width_1_related = allRelated / refRelatedSmall.current.clientWidth;
        width_1_related = width_1_related.toFixed(0);

        if (countPosIn < width_1_related - 1) {
            setCountPosIn(countPosIn + 1);
            setCountPosDe(countPosDe + 1);
            refRelatedSmall.current.style.transform =
                'translateX(-' + refRelatedSmall.current.clientWidth * countPosIn + 'px)';
        }
    };

    return (
        <div className={cx('distance')}>
            <div className={gx('grid')}>
                <div className={cx('distance-56')}>
                    <div className={cx('products__heading')}>
                        <div className={cx('products__heading-links')}>
                            <div className={cx('products__heading-link-current')}>
                                <Button href="#" className={cx('products__heading-link-current-item')}>
                                    Home
                                </Button>
                                <Text>/</Text>
                                <Button
                                    href="#"
                                    className={cx(
                                        'products__heading-link-current-item',
                                        'products__heading-link-current--active',
                                    )}
                                >
                                    Áo Thun
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-1')}>
                        <div className={cx('info-main')}>
                            <div className={cx('grid__row')}>
                                <div className={cx('grid__column-2')}>
                                    <div className={cx('info-main-images')}>
                                        <div className={cx('info-main-image')}>
                                            {section.map(({ key, src }) => {
                                                return (
                                                    <div
                                                        key={key}
                                                        className={cx('info-main-image-large')}
                                                        ref={pushRefLargeImage}
                                                        onClick={() => {
                                                            setZoomClick('open');
                                                            setSrcImage(src);
                                                        }}
                                                    >
                                                        <Image
                                                            key={key}
                                                            className={cx('info-main-image-show')}
                                                            src={src}
                                                            alt=""
                                                            ref={pushRefImageShow}
                                                            onMouseMove={(event) => handleOnMouseMove(event, key - 1)}
                                                            onMouseLeave={() => handleOnMouseLeave(key - 1)}
                                                        />
                                                    </div>
                                                );
                                            })}
                                            <ZoomImage
                                                className={zoomClick}
                                                src={srcImage}
                                                alt=""
                                                onChange={() => {
                                                    setZoomClick('close');
                                                    setSrcImage('');
                                                }}
                                            />
                                            <Button
                                                className={cx('info-main-image-btn-slide-left')}
                                                onClick={handleClickLeftLargeImage}
                                            >
                                                <Image className={cx('arrow-btn')} src={images.leftArrow} />
                                            </Button>
                                            <Button
                                                className={cx('info-main-image-btn-slide-right')}
                                                onClick={handleClickRightLargeImage}
                                            >
                                                <Image className={cx('arrow-btn')} src={images.rightArrow} />
                                            </Button>
                                        </div>
                                        <div className={cx('info-main-image-sub')} ref={refImageSub}>
                                            <div className={cx('info-main-image-sub-list')} ref={refSubImages}>
                                                {section.map(({ key, src }, index, class123) => {
                                                    // eslint-disable-next-line eqeqeq
                                                    if (index == 0)
                                                        class123 = cx(
                                                            'info-main-image-sub-item',
                                                            'info-main-image-sub-item--active',
                                                        );
                                                    else class123 = cx('info-main-image-sub-item');
                                                    return (
                                                        <div key={key} className={class123} ref={pushRefSubImage}>
                                                            <Image
                                                                key={key}
                                                                className={cx('info-main-image-sub-item-img')}
                                                                src={src}
                                                                alt=""
                                                                ref={pushRefLargeImg}
                                                                onClick={() => handleClickSubImage(key - 1)}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <Button
                                                className={cx('info-main-image-btn-left')}
                                                onClick={handleClickLeftSubImage}
                                            >
                                                <i className="info-main-image-sub-icon fas fa-chevron-left"></i>
                                                <Image className={cx('arrow-btn')} src={images.leftArrow} />
                                            </Button>
                                            <Button
                                                className={cx('info-main-image-btn-right')}
                                                onClick={handleClickRightSubImage}
                                            >
                                                <i className="info-main-image-sub-icon fas fa-chevron-right"></i>
                                                <Image className={cx('arrow-btn')} src={images.rightArrow} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('grid__column-2')}>
                                    <div className={cx('info-main-info')}>
                                        <h3 className={cx('info-main-info-heading')}>Áo Thun BOBUI 2TT</h3>
                                        <div className={cx('distance-16')}>
                                            <Star />
                                        </div>
                                        <div
                                            className={cx(
                                                'product-price-wrap',
                                                'product-price-wrap--product',
                                                'distance-16',
                                            )}
                                        >
                                            <Text className={cx('product-price', 'product-price--product')}>
                                                100.000
                                            </Text>
                                            <Text
                                                className={cx(
                                                    'product-price-currency',
                                                    'product-price-currency--product',
                                                    'no-space',
                                                )}
                                            >
                                                đ
                                            </Text>
                                        </div>
                                        <div className={cx('info-main-sold-live', 'distance-16')}>
                                            <div className={cx('info-main-sold')}>
                                                <div className={cx('info-main-sold-cover')}>
                                                    <i className="info-main-sold-icon fas fa-shopping-cart"></i>
                                                    Đã bán:
                                                    <div className={cx('info-main-sold-qnt')}>46222</div>
                                                </div>
                                                Sản phẩm trong hôm nay
                                            </div>
                                            <div className={cx('info-main-live')}>
                                                <div className={cx('info-main-live-qnt')}>782222</div>Người đang xem sản
                                                phẩm này
                                            </div>
                                        </div>
                                        <div className={cx('info-main-type', 'distance-16')}>
                                            <div className={cx('info-main-type')}>
                                                <div className={cx('info-main-type-heading')}>
                                                    <div className={cx('info-main-type-choose')}>
                                                        <Text>Color</Text>
                                                        <Text className={cx('info-main-color-current')}></Text>
                                                    </div>
                                                    <div className={cx('info-main-size-clear')}>
                                                        <Button className={cx('btn-clear')} onClick={clearSelectStyles}>
                                                            CLEAR
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className={cx('info-main-type-list')}>
                                                    <ul className={cx('info-main-type-items')}>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-color-item')}
                                                            onClick={handleOnClickColor}
                                                        ></Button>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-color-item')}
                                                            onClick={handleOnClickColor}
                                                        ></Button>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-color-item')}
                                                            onClick={handleOnClickColor}
                                                        ></Button>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-color-item')}
                                                            onClick={handleOnClickColor}
                                                        ></Button>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={cx('info-main-type')}>
                                                <div className={cx('info-main-type-heading')}>
                                                    <div className={cx('info-main-type-choose')}>
                                                        <Text>Size</Text>
                                                        <Text className={cx('info-main-size-current')}></Text>
                                                    </div>
                                                </div>
                                                <div className={cx('info-main-type-list')}>
                                                    <ul className={cx('info-main-type-items')}>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-size-item')}
                                                            styleClothes
                                                            onClick={handleOnClickSize}
                                                        >
                                                            S
                                                        </Button>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-size-item')}
                                                            styleClothes
                                                            onClick={handleOnClickSize}
                                                        >
                                                            M
                                                        </Button>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-size-item')}
                                                            styleClothes
                                                            onClick={handleOnClickSize}
                                                        >
                                                            L
                                                        </Button>
                                                        <Button
                                                            className={cx('btn-32', 'info-main-size-item')}
                                                            styleClothes
                                                            onClick={handleOnClickSize}
                                                        >
                                                            XL
                                                        </Button>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={cx('info-main-quantily')}>
                                                <Button
                                                    className={cx('info-main-quantily-sub')}
                                                    onClick={() => {
                                                        if (amountChange - 1 > 0) setAmountChange(amountChange - 1);
                                                    }}
                                                >
                                                    -
                                                </Button>
                                                <Input
                                                    type="number"
                                                    min="1"
                                                    value={amountChange.toString()}
                                                    id="quantily-input"
                                                    className={cx('quantily-value')}
                                                />
                                                <Button
                                                    className={cx('info-main-quantily-sum')}
                                                    onClick={() => {
                                                        setAmountChange(amountChange + 1);
                                                    }}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                            <div className={cx('info-main-add-to-cart')}>
                                                <Button className={cx('btn-sharp', 'info-main-add-to-cart-btn')}>
                                                    Thêm vào giỏ hàng
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('info-body', 'distance-32')}>
                            <div
                                className={cx('info-title', 'close')}
                                onClick={(el) => handleOnClickTitleIntroduction(0, el)}
                                ref={pushRefIntroduction}
                            >
                                <div className={cx('info-body-heading')}>
                                    <i className="info-body-heading-icon fas fa-chevron-up"></i>
                                    <div className={cx('info-body-heading-label')}>Description</div>
                                </div>
                                <div className={cx('info-description-body')}>
                                    <Text>👍 SIZE : M L XL</Text>
                                    <Text>🔖 FULLTAG CHÍNH HÃNG</Text>
                                    <Text>🛡 Bảo hành 1 ĐỔI 1 trong 14 ngày</Text>
                                    <Text>💯 Cam kết</Text>
                                    <Text>👉 Hàng chuẩn Local Brand, giống Real 100%</Text>
                                    <Text>
                                        👉 Chất liệu dày dặn - đường may tỉ mỉ - hình in sắc nét chuẩn thương hiệu
                                    </Text>
                                    <Text>👉 Form chuẩn Local Brand</Text>
                                </div>
                            </div>
                            <div
                                className={cx('info-title', 'close')}
                                onClick={(el) => handleOnClickTitleIntroduction(1, el)}
                                ref={pushRefIntroduction}
                            >
                                <div className={cx('info-body-heading')}>
                                    <i className="info-body-heading-icon fas fa-chevron-up"></i>
                                    <div className={cx('info-body-heading-label')}>Additional information</div>
                                </div>
                                <div className={cx('info-description-body')}>
                                    <table className={cx('info-description-table')}>
                                        <tbody>
                                            <tr className={cx('info-description-item')}>
                                                <th>MÀU</th>
                                                <td>Hồng, Xanh Da Trời</td>
                                            </tr>
                                            <tr className={cx('info-description-item')}>
                                                <th>SIZE</th>
                                                <td>S, M, L, XL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div
                                className={cx('info-title', 'close')}
                                onClick={(el) => handleOnClickTitleIntroduction(2, el)}
                                ref={pushRefIntroduction}
                            >
                                <div className={cx('info-body-heading')}>
                                    <i className="info-body-heading-icon fas fa-chevron-up"></i>
                                    <div className={cx('info-body-heading-label')}>Review</div>
                                    <div className={cx('info-review-heading-comment-qnt')}></div>
                                </div>
                                <div className={cx('info-review-body')}>
                                    <div
                                        className={cx(
                                            'grid__column-2-3',
                                            'distance-down-16',
                                            'grid__full-width--mobile',
                                        )}
                                    >
                                        <div className={cx('info-review-comment-qnt')}>
                                            <Text className={cx('info-review-qnt')}>2</Text>
                                            <Text className={cx('info-review-qnt-label')}>reviews for</Text>
                                            <Text className={cx('info-review-qnt-product')}>Áo Thun BOBUI DRUNK</Text>
                                        </div>
                                        <div className={cx('info-review-comments')}>
                                            <div className={cx('info-review-comment')}>
                                                <div className={cx('info-review-comment-image')}>
                                                    <Image
                                                        src="https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp"
                                                        alt=""
                                                        className={cx('info-review-comment-img')}
                                                    />
                                                </div>
                                                <div className={cx('info-review-comment-content')}>
                                                    <Star />
                                                    <div className={cx('info-review-comment-info')}>
                                                        <div className={cx('info-review-comment-name')}>Tâm Trần</div>
                                                        <div className={cx('info-review-comment-dash')}>-</div>
                                                        <div className={cx('info-review-comment-date')}>
                                                            November 4, 2021
                                                        </div>
                                                    </div>
                                                    <div className={cx('info-review-comment-label')}>
                                                        Mình thấy đẹp, vải mềm mịn sờ rất thik. Lúc đầu còn đắn đo do
                                                        chưa mua shop này bao giờ mà lúc nhận được hàng thì ưng ý lắm
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('info-review-comment')}>
                                                <div className={cx('info-review-comment-image')}>
                                                    <Image
                                                        src="https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp"
                                                        alt=""
                                                        className={cx('info-review-comment-img')}
                                                    />
                                                </div>
                                                <div className={cx('info-review-comment-content')}>
                                                    <Star />
                                                    <div className={cx('info-review-comment-info')}>
                                                        <div className={cx('info-review-comment-name')}>Tâm Trần</div>
                                                        <div className={cx('info-review-comment-dash')}>-</div>
                                                        <div className={cx('info-review-comment-date')}>
                                                            November 4, 2021
                                                        </div>
                                                    </div>
                                                    <div className={cx('info-review-comment-label')}>
                                                        Mình thấy đẹp, vải mềm mịn sờ rất thik. Lúc đầu còn đắn đo do
                                                        chưa mua shop này bao giờ mà lúc nhận được hàng thì ưng ý lắm
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('info-review-comment')}>
                                                <div className={cx('info-review-comment-image')}>
                                                    <Image
                                                        src="https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp"
                                                        alt=""
                                                        className={cx('info-review-comment-img')}
                                                    />
                                                </div>
                                                <div className={cx('info-review-comment-content')}>
                                                    <Star />
                                                    <div className={cx('info-review-comment-info')}>
                                                        <div className={cx('info-review-comment-name')}>Tâm Trần</div>
                                                        <div className={cx('info-review-comment-dash')}>-</div>
                                                        <div className={cx('info-review-comment-date')}>
                                                            November 4, 2021
                                                        </div>
                                                    </div>
                                                    <div className={cx('info-review-comment-label')}>
                                                        Mình thấy đẹp, vải mềm mịn sờ rất thik. Lúc đầu còn đắn đo do
                                                        chưa mua shop này bao giờ mà lúc nhận được hàng thì ưng ý lắm
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={cx('grid__column-3', 'distance-down-16', 'grid__full-width--mobile')}
                                    >
                                        <div className={cx('info-review-add')}>
                                            <h3 className={cx('info-review-add-title')}>Add a review </h3>
                                            <div className={cx('info-review-add-rate', 'distance-16')}>
                                                <h5 className={cx('info-review-add-head')}>Your rating *</h5>
                                                <Star />
                                            </div>
                                            <div className={cx('info-review-add-comment', 'distance-16')}>
                                                <h5 className={cx('info-review-add-head')}>Your review *</h5>
                                                <textarea
                                                    className={cx('info-review-add-input', 'input-64')}
                                                ></textarea>
                                            </div>
                                            <div className={cx('info-review-add-name', 'distance-16')}>
                                                <h5 className={cx('info-review-add-head')}>Name *</h5>
                                                <Input type="text" className={cx('info-review-add-input')} />
                                            </div>

                                            <div className={cx('info-review-add-mail', 'distance-16')}>
                                                <h5 className={cx('info-review-add-head')}>Email *</h5>
                                                <Input type="email" className={cx('info-review-add-input')} />
                                            </div>
                                            <div className={cx('info-review-add-confirm', 'distance-16')}>
                                                <Input
                                                    type="checkbox"
                                                    className={cx('info-review-add-input', 'btn-check')}
                                                />
                                                <div className={cx('info-review-add-confirm-label')}>
                                                    Save my name, email, and website in this browser for the next time I
                                                    comment.
                                                </div>
                                            </div>
                                            <div className={cx('info-review-add-submit distance-16')}>
                                                <Button className={cx('info-review-add-submit-btn')}>submit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('related-products', 'distance-40')}>
                        <h5 className={cx('related-products-title')}>RELATED PRODUCTS</h5>
                        <div className={cx('related-products-show')}>
                            <div className={cx('related-products-list')}>
                                <div className={cx('related-products-list-cover')} ref={refRelatedSmall}>
                                    <div
                                        className={cx(
                                            'related-products-list-cover-sub',
                                            'grid__row',
                                            'grid_min_full_width',
                                        )}
                                    >
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            section1.map(({ key }) => {
                                                return (
                                                    <div
                                                        key={key}
                                                        className={cx('related-products-item', 'grid__column-4')}
                                                        ref={pushRefLengthRelated}
                                                    >
                                                        <div className={cx('related-product')}>
                                                            <Button href="#" className={cx('related-product-link')}>
                                                                <div
                                                                    className={cx('product-item-img', 'fix-img-75')}
                                                                    style={{
                                                                        backgroundImage:
                                                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                                                    }}
                                                                ></div>
                                                                <div className={cx('product-info')}>
                                                                    <h5 className={cx('product-title')}>
                                                                        Áo Thun BOBUI CHỮ ANGEL Mymo
                                                                    </h5>
                                                                    <Star amount={3} />
                                                                    <div className={cx('product-price-wrap')}>
                                                                        <Text className={cx('product-price')}>
                                                                            100.000
                                                                        </Text>
                                                                        <Text
                                                                            className={cx(
                                                                                'product-price-currency',
                                                                                'no-space',
                                                                            )}
                                                                        >
                                                                            đ
                                                                        </Text>
                                                                    </div>
                                                                </div>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <Button className={cx('related-products-btn-slide-left')} onClick={handleClickRelatedLeft}>
                                <Image className={cx('arrow-btn')} src={images.leftArrow} />
                            </Button>
                            <Button
                                className={cx('related-products-btn-slide-right')}
                                onClick={handleClickRelatedRight}
                            >
                                <Image className={cx('arrow-btn')} src={images.rightArrow} />
                            </Button>
                        </div>
                    </div>
                    <div className={cx('distance-32')}></div>
                </div>
            </div>
        </div>
    );
}

export default Product;
