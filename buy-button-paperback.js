// Buy Button Script Paperback from Shopify

/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'danielbourke.myshopify.com',
            storefrontAccessToken: 'eebf4d5e6bc307eb543a28d38c79cec7',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '6745304465546',
                node: document.getElementById('product-component-1667963168069'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                },
                                "carousel-button": {
                                    "display": "none"
                                }
                            },
                            "title": {
                                "font-family": "Roboto, sans-serif",
                                "@media (prefers-color-scheme: dark)": {
                                    "color": "#ffffff"
                                }
                            },
                            "button": {
                                "font-family": "Oxygen, sans-serif",
                                "color": "#130e0e",
                                ":hover": {
                                    "color": "#130e0e",
                                    "background-color": "#e6be0a"
                                },
                                "background-color": "#ffd30b",
                                ":focus": {
                                    "background-color": "#e6be0a"
                                },
                                "border-radius": "7px",
                                "padding-left": "17px",
                                "padding-right": "17px"
                            },
                            "price": {
                                "font-family": "Roboto, sans-serif",
                                "@media (prefers-color-scheme: dark)": {
                                    "color": "#ffffff"
                                }
                            },
                            "compareAt": {
                                "font-family": "Roboto, sans-serif"
                            },
                            "unitPrice": {
                                "font-family": "Roboto, sans-serif"
                            }
                        },
                        "buttonDestination": "checkout",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "width": "350px",
                        "margin": "auto",
                        "text": {
                            "button": "Buy now"
                        },
                        "googleFonts": [
                            "Roboto",
                            "Oxygen"
                        ]
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-family": "Oxygen, sans-serif",
                                "color": "#130e0e",
                                ":hover": {
                                    "color": "#130e0e",
                                    "background-color": "#e6be0a"
                                },
                                "background-color": "#ffd30b",
                                ":focus": {
                                    "background-color": "#e6be0a"
                                },
                                "border-radius": "7px",
                                "padding-left": "17px",
                                "padding-right": "17px"
                            },
                            "title": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "bold",
                                "font-size": "26px",
                                "color": "#4c4c4c"
                            },
                            "price": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "normal",
                                "font-size": "18px",
                                "color": "#4c4c4c"
                            },
                            "compareAt": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "normal",
                                "font-size": "15.299999999999999px",
                                "color": "#4c4c4c"
                            },
                            "unitPrice": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "normal",
                                "font-size": "15.299999999999999px",
                                "color": "#4c4c4c"
                            }
                        },
                        "googleFonts": [
                            "Oxygen"
                        ],
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        "styles": {
                            "button": {
                                "font-family": "Oxygen, sans-serif",
                                "color": "#130e0e",
                                ":hover": {
                                    "color": "#130e0e",
                                    "background-color": "#e6be0a"
                                },
                                "background-color": "#ffd30b",
                                ":focus": {
                                    "background-color": "#e6be0a"
                                },
                                "border-radius": "7px"
                            },
                            "title": {
                                "color": "#3d3232"
                            },
                            "header": {
                                "color": "#3d3232"
                            },
                            "lineItems": {
                                "color": "#3d3232"
                            },
                            "subtotalText": {
                                "color": "#3d3232"
                            },
                            "subtotal": {
                                "color": "#3d3232"
                            },
                            "notice": {
                                "color": "#3d3232"
                            },
                            "currency": {
                                "color": "#3d3232"
                            },
                            "close": {
                                "color": "#3d3232",
                                ":hover": {
                                    "color": "#3d3232"
                                }
                            },
                            "empty": {
                                "color": "#3d3232"
                            },
                            "noteDescription": {
                                "color": "#3d3232"
                            },
                            "discountText": {
                                "color": "#3d3232"
                            },
                            "discountIcon": {
                                "fill": "#3d3232"
                            },
                            "discountAmount": {
                                "color": "#3d3232"
                            }
                        },
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        "popup": false,
                        "googleFonts": [
                            "Oxygen"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-family": "Oxygen, sans-serif",
                                "background-color": "#ffd30b",
                                ":hover": {
                                    "background-color": "#e6be0a"
                                },
                                ":focus": {
                                    "background-color": "#e6be0a"
                                }
                            },
                            "count": {
                                "color": "#130e0e",
                                ":hover": {
                                    "color": "#130e0e"
                                }
                            },
                            "iconPath": {
                                "fill": "#130e0e"
                            }
                        },
                        "googleFonts": [
                            "Oxygen"
                        ]
                    },
                    "lineItem": {
                        "styles": {
                            "variantTitle": {
                                "color": "#3d3232"
                            },
                            "title": {
                                "color": "#3d3232"
                            },
                            "price": {
                                "color": "#3d3232"
                            },
                            "fullPrice": {
                                "color": "#3d3232"
                            },
                            "discount": {
                                "color": "#3d3232"
                            },
                            "discountIcon": {
                                "fill": "#3d3232"
                            },
                            "quantity": {
                                "color": "#3d3232"
                            },
                            "quantityIncrement": {
                                "color": "#3d3232",
                                "border-color": "#3d3232"
                            },
                            "quantityDecrement": {
                                "color": "#3d3232",
                                "border-color": "#3d3232"
                            },
                            "quantityInput": {
                                "color": "#3d3232",
                                "border-color": "#3d3232"
                            }
                        }
                    }
                },
            });
        });
    }
})();
/*]]>*/