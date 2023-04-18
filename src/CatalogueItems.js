const products = [
    {
        id: '1',
        name: 'Toyo TR1',
        price: 200,
        category: 'tires',
        img: 'https://f.fcdn.app/imgs/76805a/www.toyotires.com.uy/toyouy/5403/original/catalogo/254112_254112_1/2000-2000/cubierta-neumatico-toyo-proxes-tr1-205-55r17-95v-cubierta-neumatico-toyo-proxes-tr1-205-55r17-95v.jpg',
        stock: 10,
        description: 'Cubierta Toyo TR1 Racing'
    },

    {
        id: '2',
        name: 'Pirelli P1',
        price: 150,
        category: 'tires',
        img: 'https://neumaticoscarrasco.com/sitio/wp-content/uploads/2021/03/pirelli-cinturato-p1.jpg',
        stock: 10,
        description: 'Cubierta Pirelli P1'
    },

    {
        id: '3',
        name: 'Goodyear EfficientGrip',
        price: 100,
        category: 'tires',
        img: 'https://f.fcdn.app/imgs/cf1a76/www.sorianoautocentro.com.uy/ausouy/8d81/original/catalogo/111743_111743_1/2000-2000/195-55-r16-efficientgrip-performance-91v-goodyear-195-55-r16-efficientgrip-performance-91v-goodyear.jpg',
        stock: 10,
        description: 'Cubierta Goodyear EfficientGrip'
    },

    {
        id: '4',
        name: 'Fueltech FT450',
        price: 1000,
        category: 'inyeccion',
        img: 'https://m.media-amazon.com/images/I/51gA2oDDAaL.jpg',
        stock: 10,
        description: 'ECU Fueltech FT450'
    },

    {
        id: '5',
        name: 'Tablero Gol G2 ODG',
        price: 700,
        category: 'instruments',
        img: 'https://http2.mlstatic.com/D_859163-MLB45808960587_052021-B.jpg',
        stock: 10,
        description: 'Tablero Volkswagen Gol G2 ODG'
    },

    {
        id: '6',
        name: 'Kit Turbo Volkswagen AP',
        price: 3500,
        category: 'kits',
        img: 'https://images.tcdn.com.br/img/img_prod/662641/kit_turbo_motor_ap_1_6_1_8_2_0_carburado_transversal_vw_ford_775_1_20200326144800.jpg',
        stock: 10,
        description: 'Kit Turbo Volkswagen AP'
    },

    {
        id: '7',
        name: 'Turbo Garrett G25-550',
        price: 1800,
        category: 'turbo',
        img: 'https://prorace-engineering.co.uk/wp-content/uploads/2020/04/G25_Garrett_550_660_871389.jpg',
        stock: 10,
        description: 'Turbo Garrett G25-550'
    },

    {
        id: '8',
        name: 'Intercooler HKS Grande',
        price: 900,
        category: 'intercooler',
        img: 'https://www.torque-gt.co.uk/media/catalog/product/i/n/intercooler_core_1.jpg?store=default&image-type=image',
        stock: 10,
        description: 'Intercooler HKS Grande'
    },




]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}