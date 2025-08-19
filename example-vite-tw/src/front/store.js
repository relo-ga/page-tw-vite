export const initialStore = () => {
  return {
    collections : [
      { 
        id: 1, 
        name: "Cuerno de alce", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        price: 100.50, 
        image: "https://orchideeen-shop.nl/cdn/shop/articles/lucas-hoang-VIYcvD-NkME-unsplash1.jpg?v=1710246665" 
      },
      { 
        id: 2, 
        name: "Alocasia Negra", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        price: 90.00, 
        image: "https://www.jardineriaon.com/wp-content/uploads/2022/09/alocasia-plumbea-nigra.jpg" 
      },
      { 
        id: 3, 
        name: "Helecho Babilónico", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        price: 55.50, 
        image: "https://uploads.tiendada.com/public/file-storage/im/product/vil0lztcpf9yy6yrxqqb.jpg" 
      },
      { 
        id: 4, 
        name: "Orquídea Epidendrum", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 30, 
        image: "https://i.ytimg.com/vi/QD2nrlikFOc/maxresdefault.jpg" 
      },
      { 
        id: 5, 
        name: "Anturio Joli", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 70, 
        image: "https://mindcms-main.s3.eu-west-2.amazonaws.com/dXBkYXRlLW1pbmRjbXMtbmw%3D/66d92f2a1b1f6/anturio-para-maceta-joli-blush-rosado-205735-0.jpg" 
      },
      { 
        id: 6, 
        name: "Monstera Thai Constellation", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 80, 
        image: "https://www.growjungle.com/cdn/shop/files/IMG_9413.heic?v=1738222660&width=1946" 
      },
      { 
        id: 7, 
        name: "Philodendron Xanadu", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 110, 
        image: "https://plantszen.com/cdn/shop/files/154b1ece-9696-44d9-9b85-7e5ce4d0b3b0.jpg?v=1741300797&width=1946" 
      },
      { 
        id: 8, 
        name: "Culantrillo", 
        description:"lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 150, 
        image: "https://crecerplantas.com/wp-content/uploads/2024/04/Adiantum.png" 
      },
    ],
    images_slider:[
      "https://media.admagazine.com/photos/618a62c190c4ec9a52ca0f56/master/w_1600%2Cc_limit/82871.jpg",
      "https://i.ytimg.com/vi/08xNeKBokzo/maxresdefault.jpg",
      "https://www.hola.com/horizon/landscape/9877c3ad8d1a-suculentas1-t.jpg",
      "https://www.floresyplantas.net/wp-content/uploads/terrario-de-plantas-suculentas-y-catus-2.jpg",
    ]
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    

    default:
      throw Error("Unknown action.");
  }
}
