var objekat = [
    {
        Tip: 'Mobilni telefon',
        Proizvodjac: 'Huawei',
        Model: 'HONOR 7X BLACK 5.93"',
        Ekran: '5.93", 2160 x 1080px',
        Memorija: 'RAM: 4GB/ ROM: 64GB',
        Kamera: '16 + 2 Mpix/ 8 Mpix',
        Procesor: 'Octa-Core',
        Operativni_sistem: 'Android 7.0',
        Baterija: '3340 mAh',
        slika: 'images/products/130560.jpg',
        Ocena: 10,
        Cena: 29998
    },
    {
        Tip: 'Pegla',
        Proizvodjac: 'TEFAL',
        Model: 'FV 4951E0',
        Snaga: '2500W',
        Kontinuirani_ispust_pare: '40 g/min',
        Dodatni_udar_pare: '170 g',
        Boja: 'zelena',
        slika: 'images/products/132546.jpg',
        Ocena: 9.4,
        Cena: 6e3
    },
    {
        Tip: 'Mašina za pranje veša',
        Proizvodjac: 'GORENJE',
        Model: 'WP 70S3',
        Energetski_razred: 'A+++',
        Kapacitet_pranja: '7 kg',
        Broj_obrtaja_centrifuge: '1000 obr/min',
        Nivo_buke: '57 dB(A)',
        slika: 'images/products/1328589.jpg',
        Ocena: 9.2,
        Cena: 31e3
    },
    {
        Tip: 'Klima uredjaj',
        Proizvodjac: 'VIVAX',
        Model: 'ACP 12CH35AEZO',
        Kapacitet_hlađenja: '12000 BTU',
        Kapacitet_grejanja: '13000 BTU',
        Temperaturni_raspon_rada: '- 7 °C do 43°C',
        Energetska_klasa: 'E/E',
        slika: 'images/products/125723.jpg',
        Ocena: 6,
        Cena: 8900
    },
    {
        Tip: 'Laptop računar',
        Proizvodjac: 'HP',
        Model: '255 G6 1WY47EA, 15.6"',
        Ekran: '15.6"',
        Rezolucija: '1366 x 768',
        Procesor: 'AMD Stoney Ridge APU E2-9000e 1.5 GHz (Turbo do 2.0 GHz)',
        Grafika: 'Integrisana AMD Radeon R2',
        Memorija: '4 GB DDR4 1866 MHz SDRAM',
        slika: 'images/products/127932.jpg',
        Ocena: 4.3,
        Cena: 26e3
    },
    {
        Tip: 'Presa za kosu',
        Proizvodjac: 'FIRST',
        Model: 'FA5663 5',
        Keramička_ploca: 'Da',
        Snaga: '25 W',
        Maksimalno_zagrevanje_do: '150 stepeni',
        Vreme_zagrevanja: '90 sekundi',
        slika: 'images/products/128181.jpg',
        Ocena: 4.7,
        Cena: 1200
    },
    {
        Tip: 'Matična ploča',
        Proizvodjac: 'ASRock',
        Model: 'A320M-DGS',
        Format: 'Micro ATX',
        Cipset: 'AMD Promontory A320',
        Slot_Socket: 'AM4',
        Podrska: 'Supports AMD Socket AM4 A-Series APUs (Bristol Ridge) and Ryzen Series CPUs (Summit Ridge)',
        Memorijski_slotovi: 2,
        TipRama: 'DDR4',
        Maksimalna: '32GB',
        RadniTaktRama: '3200+(OC)/293 (OC)/2667/2400/2133 MHz',
        PSportovi: '1x PS/2 Mouse/Keyboard Port',
        USBprikljcci: '2x USB 2.0, 4x USB 3.0',
        InterniUSBpriključci: '2 x USB 2.0, 1x USB 3.0',
        slika: 'images/products/6813518.jpg',
        Ocena: 5,
        Cena: 5990
    },
    {
        Tip: 'Mobilni telefon',
        Proizvodjac: 'SAMSUNG',
        Model: 'SM-N960FZKDSEE 6.4"',
        Ekran: '6.4", 1440 x 2960 px',
        Memorija: 'RAM: 6GB/ ROM: 128GB',
        Kamera: '12 Mpix/ 8 Mpix',
        Procesor: 'Octa-Core',
        Operativni_sistem: 'Android 8.1',
        Baterija: '4000 mAh',
        slika: 'images/products/133122.jpg',
        Ocena: 7.3,
        Cena: 123999
    },
    {
        Tip: 'Slušalice',
        Proizvodjac: 'SONY',
        Model: 'WHCH400L.CE7',
        Povezivanje: 'Bluetooth v4.2',
        Frekventni_opseg: '20Hz - 20KHz',
        Boja: 'Plava',
        Domet: 'Do 10m',
        Dodatno: 'Kontrola jačine zvuka',
        slika: 'images/products/132733.jpg',
        Ocena: 6.2,
        Cena: 5e3
    },
    {
        Tip: 'Laptop računar',
        Proizvodjac: 'DELL',
        Model: '13 9360 NOT10117',
        Ekran: '13.3”',
        Rezolucija: '1920 x 1080',
        Procesor: 'Intel Core i7 7500U 2.7GHz',
        Grafika: 'Integrisana Intel HD 620',
        Memorija: '8GB LPDDR3 1866MHz SDRAM',
        Hard_disk: '256GB',
        slika: 'images/products/125550.jpg',
        Ocena: 7.7,
        Cena: 176998
    }
];

var objekat = [{
        id: 1,
        slika: 'images/products/125550.jpg',
        ocena: 8.6,
        cena: 39900,
        proizvodjac: 'Apple',
        model: 'MN8Y2SE/A',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'iPhone 7 - Silver'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '138,3 mm x 67,1 mm x 7,1 mm'
            },
            {
                naziv: 'Rezolucija',
                vrednost: '1334 x 750 px'
            },
            {
                naziv: 'Procesor',
                vrednost: 'Apple A10 Fusion, Quad-Core'
            },
            {
                naziv: 'Baterija',
                vrednost: '1960 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Zadnja kamera- 12 MP Selfi kamera - 7 MP'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'iOS 10'
            },
            {
                naziv: 'Boja',
                vrednost: 'Crna'
            }
        ]
    },
    {
        id: 2,
        slika: 'images/products/125723.jpg',
        ocena: 9.2,
        cena: 144290,
        proizvodjac: 'Apple',
        model: 'MWC22SE/A',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'iPhone 11 Pro'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Boja',
                vrednost: 'Siva'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '71,4 mm x 144 mm x 8,1 mm'
            },
            {
                naziv: 'Rezolucija',
                vrednost: '2436 x 1125 px'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'iOS 13'
            },
            {
                naziv: 'Baterija',
                vrednost: 'Ugrađena litijum-jonska baterija'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Zadnja kamera- 12 MP + 12 MP + 12 MP Selfi kamera- 12 MP'
            }
        ]
    },
    {
        id: 3,
        slika: 'images/products/127932.jpg',
        ocena: 5.7,
        cena: 36990,
        proizvodjac: 'Samsung',
        model: 'SM-A515FZBVEUF',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Samsung Galaxy A51'
            },
            {
                naziv: 'Ekran',
                vrednost: '6,5"'
            },
            {
                naziv: 'Boja',
                vrednost: 'Crna'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '73,6 mm x 158,5 mm x 7,9 mm'
            },
            {
                naziv: 'Rezolucija',
                vrednost: '1080 x 2400 px (FHD+)'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'Android'
            },
            {
                naziv: 'Baterija',
                vrednost: '4000 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Glavna kamera-48 MP + 12 MP + 5 MP + 5 MP Selfi kamera-32 MP'
            }
        ]
    },
    {
        id: 4,
        slika: 'images/products/128181.jpg',
        ocena: 9.0,
        cena: 36990,
        proizvodjac: 'Samsung',
        model: 'SM-A715FZBUSEE',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Samsung Galaxy A71'
            },
            {
                naziv: 'Ekran',
                vrednost: 'AMOLED ekran sa dijagonalom od 6,7"'
            },
            {
                naziv: 'Boja',
                vrednost: 'Bela'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '76 mm x 163,6 mm x 7,7 mm'
            },
            {
                naziv: 'Rezolucija',
                vrednost: '1080 x 2400 px (FHD+)'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'Android'
            },
            {
                naziv: 'Baterija',
                vrednost: '4500 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Glavna kamera-64 MP + 12 MP + 5 MP + 5 MP Selfi kamera-32 MP'
            }
        ]
    },
    {
        id: 5,
        slika: 'images/products/132546.jpg',
        ocena: 4.2,
        cena: 39990,
        proizvodjac: 'Xiaomi',
        model: 'MI 9 T 6/64 BL',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Xiaomi Mi 9T'
            },
            {
                naziv: 'Ekran',
                vrednost: '6,39"'
            },
            {
                naziv: 'Boja',
                vrednost: 'Crna'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '156,7 mm x 74,3 mm x 8,8 mm'
            },
            {
                naziv: 'Procesor',
                vrednost: 'Snapdragon 730, Octa core, 2 x 2,2 GHz 6 x 18 GHz Qualcomm Adreno 618'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'MIUI V10.2 Android 9.0 Pie'
            },
            {
                naziv: 'Baterija',
                vrednost: 'Li-Polymer, 4000 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Zadnja-48 MP + 8 MP + 13 MP Selfi-20 MP'
            }
        ]
    },
    {
        id: 6,
        slika: 'images/products/132733.jpg',
        ocena: 9.6,
        cena: 76990,
        proizvodjac: 'Xiaomi',
        model: 'MI 10 8/128',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Xiaomi Mi 10'
            },
            {
                naziv: 'Ekran',
                vrednost: 'Vrhunski AMOLED ekran od 6,67"'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Boja',
                vrednost: 'Plava'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '162,6 mm x 74,8 mm x 9 mm'
            },
            {
                naziv: 'Procesor',
                vrednost: 'Snapdragon 865, Octa core 1 x 2,84 GHz Kryo 585 & 3 x 2,42 GHz Kryo 585 & 4 x 1,80 GHz Kryo 585'
            },
            {
                naziv: 'Baterija',
                vrednost: '4780 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Prednja-20 MP Zadnja-108 MP + 13 MP + 2 MP + 2 MP'
            }
        ]
    },
    {
        id: 7,
        slika: 'images/products/1328589.jpg',
        ocena: 9.3,
        cena: 99990,
        proizvodjac: 'Huawei',
        model: 'P40',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Huawei P40'
            },
            {
                naziv: 'Ekran',
                vrednost: '6,1" OLED'
            },
            {
                naziv: 'Boja',
                vrednost: 'Bela'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'Android 10'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '71,06 mm x 148,9 mm x 8,5 mm'
            },
            {
                naziv: 'Procesor',
                vrednost: 'Kirin990 5G, Octa Core 2 x Cortex-A76 2,86 GHz + 2 x Cortex-A76 2,36 GHz + 4 x Cortex-A55 1,95 GHz'
            },
            {
                naziv: 'Baterija',
                vrednost: '3700 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Zadnja-50 MP + 16 MP + 8 MP Selfi-32 MP'
            }
        ]
    },
    {
        id: 8,
        slika: 'images/products/6813518.jpg',
        ocena: 8.0,
        cena: 69990,
        proizvodjac: 'Huawei',
        model: 'P30',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Huawei P30'
            },
            {
                naziv: 'Ekran',
                vrednost: '6.1" FHD+ OLED 422 PPI'
            },
            {
                naziv: 'Boja',
                vrednost: 'Siva'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'Android 9'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '71.36 mm • 149.1 mm • 7.57 mm'
            },
            {
                naziv: 'Procesor',
                vrednost: 'HUAWEI Kirin 980 CPU, Octa-core, 2 x Cortex-A76 Based 2.6GHz+ 2 x Cortex-A76 Based 1.92GHz + 4 x Cortex-A55 1.8GHz'
            },
            {
                naziv: 'Baterija',
                vrednost: '3550 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Zadnja Kamera-40Mpix + 16Mpix + 8Mpix, f/1.8 + f/2.2 + f2.4, supports autofocus Selfi Kamera-32Mpix, f/2.0 aperture, supports fix focus'
            }
        ]
    },
    {
        id: 9,
        slika: 'images/products/8632900.jpg',
        ocena: 5.8,
        cena: 24590,
        proizvodjac: 'Samsung',
        model: 'SM-A202FZBDSEE',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Samsung Galaxy A20e'
            },
            {
                naziv: 'Ekran',
                vrednost: '5.8", 720 x 1560 px'
            },
            {
                naziv: 'Boja',
                vrednost: 'Plava'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'Android'
            },
            {
                naziv: 'Zemlja proizvodnje',
                vrednost: 'China'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '69.7 x 147.4 x 8.4 mm'
            },
            {
                naziv: 'Procesor',
                vrednost: 'Brzina: 1.6GHz,1.35GHz Octa-Core'
            },
            {
                naziv: 'Baterija',
                vrednost: '3000 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Zadnja kamera-13.0 MP + 5.0 MP Auto fokus DIgitalni zoom do 4x Prednja kamera-8.0 MP'
            }
        ]
    },
    {
        id: 10,
        slika: 'images/products/125550222.jpg',
        ocena: 5.2,
        cena: 11990,
        proizvodjac: 'Huawei',
        model: 'HUAWEI Y5P',
        spec: [{
                naziv: 'Naziv uredjaja',
                vrednost: 'Huawei Y5P'
            },
            {
                naziv: 'Ekran',
                vrednost: '5,45"'
            },
            {
                naziv: 'Boja',
                vrednost: 'Crna'
            },
            {
                naziv: 'Operativni sistem',
                vrednost: 'Android 10'
            },
            {
                naziv: 'Dimenzije',
                vrednost: '146,5 mm x 70,94 mm x 8,35 mm'
            },
            {
                naziv: 'Procesor',
                vrednost: '4 x Cortex A53 2 GHz + 4 x Cortex A53 1,5 GHz Octa Core Čip: Mediatek MT6762R'
            },
            {
                naziv: 'Baterija',
                vrednost: '2920 mAh'
            },
            {
                naziv: 'Kamera',
                vrednost: 'Glavna-8 MP Selfi-5 MP'
            }
        ]
    }
];