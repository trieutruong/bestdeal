// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   data: {
//     items: {
//         sectionType: 'flash-deal'
//         items:
//         [   
//             {
//                 _id: number
//                 name: string,  
//                 description: string
//                 image: string
//                 oldPrice: number
//                 price: number
//                 like: boolean
//                 discount: number
//                 rating: object
//                 createdAt?: Date
//                 updatedAt?: Date
//             }
//         ]
//     }
//   }
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ data: {
//     items: [
//         {
//             sectionType: "flash-deal",
//             title: "FLASH DEAL",
//             view: 'XEM TẤT CẢ',
//             items:
//             [   
//                 {
//                     _id: 1,
//                     name: 'Máy mài góc BOSCH may-mai-goc-bosch-gws-060-100mm-1563357100',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 20,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     link: '/may-mai-goc-bosch-gws-060-100mm-1563357100/1'
//                 },
//                 {
//                     _id: 2,
//                     name: 'Máy khoan Bosch GSB 13RE 650W',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 650.000,
//                     price: 580.000,
//                     like: true,
//                     discount: 25,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     }
//                 },
//                 {
//                     _id: 3,
//                     name: 'Máy laze tia xanh (5 tia)',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.500,
//                     like: true,
//                     discount: 18,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     }
//                 },
//                 {
//                     _id: 4,
//                     name: 'Máy cắt gạch Makita phi 100',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 10,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     }
//                 },
//                 {
//                     _id: 5,
//                     name: 'Máy đục bê tông Makita HM0810 chính hãng',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 15,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     }
//                 },
//                 {
//                     _id: 6,
//                     name: 'Máy đục bê tông Makita HM0810 chính hãng',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 15,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     }
//                 },
//                 {
//                     _id: 7,
//                     name: 'Máy đục bê tông Makita HM0810 chính hãng',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 15,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     }
//                 },
//             ]
//         },
//         {
//             sectionType: "famous-brand",
//             title: "THƯƠNG HIỆU NỔI BẬT",
//             view: 'XEM TẤT CẢ',
//             items:
//             [   
//                 {
//                     _id: 1,
//                     name: 'BOSCH',
//                     image: '/img/logo-bosch.png',
//                     type: 'brand'
//                 },
//                 {
//                     _id: 2,
//                     name: 'MAKITA',
//                     image: '/img/makita-logo.png',
//                     type: 'brand'
//                 },
//                 {
//                     _id: 3,
//                     name: 'BLACK AND DECKER',
//                     image: '/img/black-and-decker-logo.jpg',
//                     type: 'brand'
//                 },
//                 {
//                     _id: 4,
//                     name: 'DEWALT',
//                     image: '/img/dewalt-logo.png',
//                     type: 'brand'
//                 },
//                 {
//                     _id: 5,
//                     name: 'STANLEY',
//                     image: '/img/logo-stanley.jpg',
//                     type: 'brand'
//                 },
//                 {
//                     _id: 6,
//                     name: 'STANLEY',
//                     image: '/img/logo-stanley.jpg',
//                     type: 'brand'
//                 },
//                 {
//                     _id: 7,
//                     name: 'STANLEY',
//                     image: '/img/logo-stanley.jpg',
//                     type: 'brand'
//                 },
//             ]
//         },
//         {
//             sectionType: "hand-tools",
//             title: "DỤNG CỤ CẦM TAY",
//             view: 'XEM THÊM',
//             category: [
//                 "Dân dụng",
//                 "Công trình"
//             ],
//             items:
//             [   
//                 {
//                     _id: 1,
//                     name: 'Máy mài góc BOSCH may-mai-goc-bosch-gws-060-100mm-1563357100',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 20,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     link: '/may-mai-goc-bosch-gws-060-100mm-1563357100/1',
//                     type: 'tools'
//                 },
//                 {
//                     _id: 2,
//                     name: 'Máy khoan Bosch GSB 13RE 650W',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 650.000,
//                     price: 580.000,
//                     like: true,
//                     discount: 25,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     type: 'tools'
//                 },
//                 {
//                     _id: 3,
//                     name: 'Máy laze tia xanh (5 tia)',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.500,
//                     like: true,
//                     discount: 18,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     type: 'tools'
//                 },
//                 {
//                     _id: 4,
//                     name: 'Máy cắt gạch Makita phi 100',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 10,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     type: 'tools'
//                 },
//                 {
//                     _id: 5,
//                     name: 'Máy đục bê tông Makita HM0810 chính hãng',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 15,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     type: 'tools'
//                 },
//                 {
//                     _id: 6,
//                     name: 'Máy đục bê tông Makita HM0810 chính hãng',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 15,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     type: 'tools'
//                 },
//                 {
//                     _id: 7,
//                     name: 'Máy đục bê tông Makita HM0810 chính hãng',
//                     image: '/img/products/may-mai-goc-bosch-gws-060-100mm-1563357100.jpg',
//                     oldPrice: 600.000,
//                     price: 450.000,
//                     like: true,
//                     discount: 15,
//                     rating: {
//                         rate: 3.9,
//                         count: 120
//                     },
//                     type: 'tools'
//                 },
//             ]
//         },
//     ]
//   }})
// }
