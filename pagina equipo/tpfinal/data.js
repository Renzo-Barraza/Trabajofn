const productoS = [
    {
        id: 1,
        producto: 'Camiseta Metalizada Oversize',
        color: 'Blanco',
        talle: 'L',
        img: 'https://static.zara.net/assets/public/774f/4074/bee04668886c/f29ee2731570/05644639808-e1/05644639808-e1.jpg?ts=1722940998592&w=750&f=auto',
        cantidad: 1,
        precio: '52.990,00 ARS',
    },

    {
        id: 2,
        producto: 'Camiseta Volantes',
        color: 'Blanco',
        talle: 'M',
        img: 'https://static.zara.net/assets/public/b432/1155/926a443ea93a/d00b3ea42674/05857344251-e1/05857344251-e1.jpg?ts=1722952660764&w=750&f=auto',
        cantidad: 1,
        precio: '22.990,00 ARS'
    },

    {
        id: 3,
        producto: 'Top Perlas Punto Stretch',
        color: 'Blanco',
        talle: 'S',
        img: 'https://static.zara.net/assets/public/8c93/40ea/f3d344e9a989/47e45190a831/05584655250-e1/05584655250-e1.jpg?ts=1721394665139&w=750&f=auto',
        cantidad: 1,
        precio: '59.990,00 ARS',
    },

    {
        id: 4,
        producto: 'Vestido Midi Camisero ZW Collection',
        color: 'Negro',
        talle: 'XL',
        img: 'https://static.zara.net/assets/public/ef68/f5ff/fe6d488d9b19/719b12f9dfa3/04786096800-e1/04786096800-e1.jpg?ts=1715702845964&w=850&f=auto',
        cantidad: '1',
        precio: '245.990,00 ARS',
    },

    {
        id: 5,
        producto: 'Bañador Asimétrico Pieza Metalica',
        color: 'Azul',
        talle: 'XS',
        img: 'https://static.zara.net/assets/public/c585/00db/8f224fc9adcd/3d7f9338a88b/02910001401-e1/02910001401-e1.jpg?ts=1713362007884&w=750&f=auto',
        cantidad: '1',
        precio: '99.990,00 ARS',
    },
    {
        id: 6,
        producto: 'Abrigo Flecos',
        color: 'Rojo',
        talle: 'M',
        img: 'https://static.zara.net/assets/public/6c92/d886/d6cd436bb648/332d42e08aab/03920097605-e1/03920097605-e1.jpg?ts=1715176595868&w=750&f=auto',
        cantidad: '1',
        precio: '245.990,00 ARS',
    },
    {
        id: 7,
        producto: 'Chaleco Técnico Capucha',
        color: 'Negro',
        talle: 'XL',
        img: 'https://static.zara.net/assets/public/2d71/0f05/b42a4104b943/f8b082f9707e/07380863800-e1/07380863800-e1.jpg?ts=1726064033908&w=750&f=auto',
        cantidad: '1',
        precio: '175.990,00 ARS',
    },
    {
        id: 8,
        producto: 'Vestido Estructura ZW Collection',
        color: 'Negro',
        talle: 'L',
        img: 'https://static.zara.net/assets/public/9861/15a6/ffee421aa252/d66ddbaaa394/09479022800-e1/09479022800-e1.jpg?ts=1708510145549&w=750&f=auto',
        cantidad: '1',
        precio: '139.990,00 ARS',
    },
    {
        id: 9,
        producto: 'Cazadora Encerada Cuello Combinado',
        color: 'Rojo',
        talle: 'M',
        img: 'https://static.zara.net/photos///2024/V/0/2/p/6861/405/609/2/w/750/6861405609_6_1_1.jpg?ts=1705064171788',
        cantidad: '1',
        precio: '279.990,00 ARS',
    },
    {
        id: 10,
        producto: 'Camisa Elástica Estructura',
        color: 'Azul',
        talle: 'XL',
        img: 'https://static.zara.net/assets/public/3cb0/4d2a/95374879afce/5a05d50eac4d/04201570401-e1/04201570401-e1.jpg?ts=1708690805541&w=750&f=auto',
        cantidad: '1',
        precio: '99.990,00 ARS',
    },
    {
        id: 11,
        producto: 'Camiseta Rayas',
        color: 'Rojo',
        talle: 'XL',
        img: 'https://static.zara.net/photos///2024/W/0/2/p/5857/405/061/2/w/750/5857405061_6_1_1.jpg?ts=1705320501596',
        cantidad: '1',
        precio: '52.990,00 ARS',
    },
    {
        id: 12,
        producto: 'Cazadora Bomber Parches',
        color: 'Amarillo',
        talle: 'S',
        img: 'https://static.zara.net/assets/public/7d32/8fa8/d8184d9f8873/4d3fd109adbc/06318306300-e1/06318306300-e1.jpg?ts=1704788306823&w=750&f=auto',
        cantidad: '1',
        precio: '175.990,00 ARS',
    },
    {
        id: 13,
        producto: 'Chaqueta Punto Liso',
        color: 'Rojo',
        talle: 'S',
        img: 'https://static.zara.net/assets/public/e087/aa09/c2784af7803a/e6985b1113f6/06427011600-e1/06427011600-e1.jpg?ts=1719303047715&w=750&f=auto',
        cantidad: '1',
        precio: '95.990,00 ARS',
    },
    {
        id: 14,
        producto: 'Vestido Midi Estampado',
        color: 'Negrp',
        talle: 'XS',
        img: 'https://static.zara.net/assets/public/c0d4/41fc/0c04430389b8/795a6e608513/01165092093-e1/01165092093-e1.jpg?ts=1715845584350&w=750&f=auto',
        cantidad: '1',
        precio: '125.990,00 ARS',
    },
    {
        id: 15,
        producto: 'Trench Denim TRF',
        color: 'Azul',
        talle: 'L',
        img: 'https://static.zara.net/photos///2023/I/0/1/p/3607/271/401/2/w/750/3607271401_6_1_1.jpg?ts=1693913861280',
        cantidad: '1',
        precio: '215.990,00 ARS',
    },
    {
        id: 16,
        producto: 'Falda Midi Satinada',
        color: 'Amarillo',
        talle: 'M',
        img: 'https://static.zara.net/assets/public/61a4/3dca/52a64597823d/7b6a0bec5214/03851599305-e1/03851599305-e1.jpg?ts=1725520005862&w=750&f=auto',
        cantidad: '1',
        precio: '89.990,00 ARS',
    },
    {
        id: 17,
        producto: 'Sobrecamisa Boxy Fit',
        color: 'Negro',
        talle: 'S',
        img: 'https://static.zara.net/assets/public/cc7a/555e/3d914870aaa2/311e58821e3e/06987403809-e1/06987403809-e1.jpg?ts=1722954769521&w=750&f=auto',
        cantidad: '1',
        precio: '125.990,00 ARS',
    },
    {
        id: 18,
        producto: 'Jersey Estructura Algodón',
        color: 'Blanco',
        talle: 'XL',
        img: 'https://static.zara.net/assets/public/29d4/ce56/925643e1a553/04776452cc2d/03487501082-e1/03487501082-e1.jpg?ts=1727351020936&w=750&f=auto',
        cantidad: '1',
        precio: '99.990,00 ARS',
    },
    {
        id: 19,
        producto: 'Sobrecamisa Raya Combinada',
        color: 'Azul',
        talle: 'M',
        img: 'https://static.zara.net/assets/public/26a5/0fef/ad0e495fa58e/85315eedd0cc/05908198401-e1/05908198401-e1.jpg?ts=1723448527773&w=750&f=auto',
        cantidad: '1',
        precio: '175.990,00 ARS',
    },
    {
        id: 20,
        producto: 'Falda Mini Efecto Piel',
        color: 'Negro',
        talle: 'M',
        img: 'https://static.zara.net/assets/public/775b/4c5e/93e7463fba89/6e7d20104fa8/4000.jpg?ts=1692953198185&w=750&f=auto',
        cantidad: '1',
        precio: '89.990,00 ARS',
    },
    {
        id: 21,
        producto: 'Blazer Bomber Crop Rayas',
        color: 'Azul',
        talle: 'S',
        img: 'https://static.zara.net/assets/public/76a7/aa53/9aa04224aeb1/0ea66d823a2b/4000.jpg?ts=1693322842960&w=750&f=auto',
        cantidad: '1',
        precio: '175.990,00 ARS',
    },
    {
        id: 22,
        producto: 'Top Off Shoulder Punto Liso',
        color: 'Amarillo',
        talle: 'L',
        img: 'https://static.zara.net/assets/public/98a6/94fb/97ef4c4298e9/48fa6b87c8b3/03653012321-e1/03653012321-e1.jpg?ts=1715874093776&w=750&f=auto',
        cantidad: '1',
        precio: '89.990,00 ARS',
    },
    {
        id: 23,
        producto: 'Abrigo Cruzado con Lana',
        color: 'Rojo',
        talle: 'L',
        img: 'https://static.zara.net/assets/public/0f3a/140b/8bb444e3b5cd/dabf9cc4d29f/05372413061-e1/05372413061-e1.jpg?ts=1714126953416&w=750&f=auto',
        cantidad: '1',
        precio: '99.990,00 ARS',
    },
    {
        id: 24,
        producto: 'Chaqueta Punto Liso Joyas',
        color: 'Amarillo',
        talle: 'M',
        img: 'https://static.zara.net/assets/public/43d2/c928/73c04abaa45e/4fd2a4e4a20a/06427037300-e1/06427037300-e1.jpg?ts=1715342944260&w=750&f=auto',
        cantidad: '1',
        precio: '125.990,00 ARS',
    },
    {
        id: 25,
        producto: 'Vestido Mini Frunces',
        color: 'Azul',
        talle: 'XS',
        img: 'https://static.zara.net/assets/public/390a/a24e/2ada4318af1d/cdb8fd770e0d/03882707423-e1/03882707423-e1.jpg?ts=1721293392519&w=750&f=auto',
        cantidad: '1',
        precio: '89.990,00 ARS',
    },
    {
        id: 26,
        producto: 'Camiseta Interlock Lavada',
        color: 'Negro',
        talle: 'XS',
        img: 'https://static.zara.net/assets/public/3012/2dc6/20c241309c5b/b202e62c53fc/04174160822-e1/04174160822-e1.jpg?ts=1707997891521&w=750&f=auto',
        cantidad: '1',
        precio: '59.990,00 ARS',
    },
    {
        id: 27,
        producto: 'Body Elástico Hombreras',
        color: 'Rojo',
        talle: 'XS',
        img: 'https://static.zara.net/assets/public/a72d/e87e/0e604d85a289/9a9ac03bf388/04661012600-e1/04661012600-e1.jpg?ts=1709037633884&w=750&f=auto',
        cantidad: '1',
        precio: '79.990,00 ARS',
    },
    {
        id: 28,
        producto: 'Camiseta Asimétrica Básica',
        color: 'Amarillo',
        talle: 'XL',
        img: 'https://static.zara.net/assets/public/500a/b70f/332b427a9931/606333fa7dfa/4000.jpg?ts=1693912588936&w=750&f=auto',
        cantidad: '1',
        precio: '22.990,00 ARS',
    },
    {
        id: 29,
        producto: 'Kimono Plisado Cinturón',
        color: 'Amarillo',
        talle: 'XS',
        img: 'https://static.zara.net/assets/public/8bd4/9f2c/7f664e7ca4e0/28106acd0fd0/01067455321-e1/01067455321-e1.jpg?ts=1726671830416&w=750&f=auto',
        cantidad: '1',
        precio: '125.990,00 ARS',
    },
    {
        id: 30,
        producto: 'Chaleco Acolchado',
        color: 'Blanco',
        talle: 'XS',
        img: 'https://static.zara.net/assets/public/ed44/d608/7cd24466b958/32cc2050c8c1/4000.jpg?ts=1690816322483&w=750&f=auto',
        cantidad: '1',
        precio: '89.990,00 ARS',
    },
    {
        id: 31,
        producto: 'Camisa Rayas Mezcla Algodón',
        color: 'Rojo',
        talle: 'XL',
        img: 'https://static.zara.net/photos///2024/V/0/2/p/5679/411/600/2/w/750/5679411600_6_1_1.jpg?ts=1705322984308',
        cantidad: '1',
        precio: '99.990,00 ARS',
    },
    {
        id: 32,
        producto: 'Top Rayas Punto Trenzado',
        color: 'Azul',
        talle: 'S',
        img: 'https://static.zara.net/assets/public/0425/8662/368b434bb27c/5a010be7d29e/06771042112-e1/06771042112-e1.jpg?ts=1715342945413&w=750&f=auto',
        cantidad: '1',
        precio: '79.990,00 ARS',
    },
    {
        id: 33,
        producto: 'Jersey Off Shoulder Punto',
        color: 'Blanco',
        talle: 'S',
        img: 'https://static.zara.net/assets/public/2023/e8d7/ebaa44fc9ebc/61a8fce6111a/03920022250-e1/03920022250-e1.jpg?ts=1714468672820&w=750&f=auto',
        cantidad: '1',
        precio: '95.990,00 ARS',
    },
    {
        id: 34,
        producto: 'Abrigo Mezcla Lana',
        color: 'Negro',
        talle: 'L',
        img: 'https://static.zara.net/assets/public/7b8f/20f4/f5444d44ba89/331d6710ceaa/07372870800-e1/07372870800-e1.jpg?ts=1718693255985&w=750&f=auto',
        cantidad: '1',
        precio: '349.990,00 ARS',
    },
    {
        id: 35,
        producto: 'Cárdigan Oversize Estructura',
        color: 'Blanco',
        talle: 'XL',
        img: 'https://static.zara.net/assets/public/90d8/4fdd/fd194056bf71/ac3989dea699/09598441300-e1/09598441300-e1.jpg?ts=1724685736312&w=750&f=auto',
        cantidad: '1',
        precio: '139.990,00 ARS',
    },
];

export default productoS;