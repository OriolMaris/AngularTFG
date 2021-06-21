const races = [

    'AKITA INU',
    'ALASKAN MALAMUTE',
    'AMERICAN BULLY',
    'AMERICAN PITBULL',
    'AMERICAN STAFFORDSHIRE TERRIER',
    'AMERICAN STANFORD',
    'AMERICAN STANFORD X MASTIN',
    'AUSTRALIAN COBBERDOG',
    'BALDINO',
    'BASSET',
    'BASSET BLEU DE GASCOGNE',
    'BASSET HOUND',
    'BEAGLE',
    'BICHON FRISÉ',
    'BICHON HABANÉS',
    'BICHON MALTES',
    'BLOODHOUND',
    'BOBTAIL',
    'BODEGUERO',
    'BODEGUERO ANDALUZ',
'BORDER COLLIE',
'BOUVIER DE BERNA',
'BOXER',
'BOXER X BULLDOG FRANCES',
'BOXER X MASTI',
'BOYERO DE BERNA',
'BRACO ALEMAN',
'BRACO AZUL DE AUVERNIA',
'BRACO DE WEIMAR',
'BRACO FRANCÉS',
'BRACO HUNGARO',
'BRETON FRANÇAIS',
'BRETON SPAGNIEL',
'BRUNO DE JURA',
'BULL TERRIER',
'BULLDOG',
'BULLDOG ANGLES',
'BULLDOG FRANCÉS',
'BULLY STANFOR',
'CA DE BESTIAR',
'CAçADOR',
'CAIRN TERRIER',
'CANE CORSO',
'CANICHE ENANO',
'CANICHE ENANO',
'CANICHE GIGANTE',
'CANICHE MEDIANO',
'CANICHE MEDIANO ',
'CANIXE MITJÀ',
'CANIXE NAN',
'CANIXE TOY',
'CANIXE X YORKI',
'CARLINO',
'CAVALIER KING CHARLES SPANIEL',
'CHIHUAHUA',
'CHOW-CHOW',
'CLUMBER SPANIEL',
'COCKER AMERICANO',
'COCKER SPANIEL',
'COCKER SPANIEL INGLÉS',
'COCKER X BRETON',
'COLLIE',
'COLLIE X MALAMUTE',
'CONILLAIRE',
'COTON DE TULÉAR',
'CRESTADO CHINO',
'CREUAT',
'CREUAT BODEGUERO',
'CREUAT COCKER',
'CREUAT DE BEAGLE',
'CREUAT XIHUAHUA',
'DACHSHUND DE PELO DURO',
'DACHSHUND DE PELO LISO',
'DALMATA',
'DOBERMANN',
'DOGO ALEMAN',
'DOGO ALEMAN ARLEQUIN',
'DOGO ALEMANY',
'DOGO ARGENTINO',
'DOGO DE BURDEOS',
'DRAHTHAAR',
'EPAGNEUL BRETON',
'ÉPAGNEUL BRETON',
'EUROPEU',
'EXOTIC BULL',
'FOX TERRIER DE PELO DURO',
'FOX TERRIER DE PELO LISO',
'GALGO AFGANO',
'GALGO ANGLES',
'GALGO ESPAÑOL',
'GOLDEN RETRIEVER',
`GOS D'AIGUA`,
`GOS D'ATURA`,
'GRAND BLEU DE GASCOGNE',
'GRIFFON',
'GRIFFON ASTUR CANTABRO',
'GRIFFON FAUVE DE BRETAGNE',
'GRIFON BELGA',
'GRIFON DE BRUSELAS',
'HUSKY',
'JACK RUSSELL TERRIER',
'KING CHARLES SPANIEL',
'LABRADOR RETRIEVER',
'LABRADOR RETRIVER',
'LAKELAND TERRIER',
'LASHA APSO',
'LLAURADORXCOLLIE',
'MALTÉS',
'MALTIPOO',
'MASTI',
'MASTI X GOS DÁTURA',
'MASTI X SAN BERNAT',
'MASTIN DE LOS PIRINEOS',
'MASTIN ESPAÑOL',
'MASTIN NAPOLITANO',
'MESTIS',
'MESTIZOS',
'MUNTANYA DEL PIRINEU',
'P.A. X HUSKI',
'PAPILLON',
'PASTOR ALEMAN',
`PASTOR ALEMAN X GOS D'ATURA`,
'PASTOR ALEMANY',
'PASTOR BELGA',
'PASTOR BELGA' ,
'PASTOR BELGA' ,
'PASTOR BELGA' ,
'PASTOR BLANC SUIS',
'PASTOR DEL CAUCASO',
'PASTOR LEONES',
'PASTOR SUIS',
'PASTOR VASC',
'PASTOR VASCO',
'PEQUINES',
'PEQUINÉS',
'PERDIGUERO PORTUGUES',
'PERRO DE AGUAS ESPAÑOL',
'PICCOLO LEVRIERO ITALIANO',
'PINSCHER',
'PIT BULL',
'PITBULL X PRESA CANARIO',
'PODENCO',
'PODENCO IBICENCO ',
'POINTER',
'POINTER X LLAURADOR',
'POMERANIA',
'POMERANIA TOY',
'PRESA CANARIO',
'PULI',
'RATON DE PRAGA',
'RHODESIAN RIDGEBACK',
'ROTTWEILER',
'ROUGH COLLIE',
'ROUGHT COLLIE',
'RUS BLAU',
'SABUESO ESPAÑOL',
'SAMOYEDO',
'SAMOYEDO X ALANO',
'SANT BERNAT',
'SCHNAUZER ENANO',
'SCHNAUZER GIGANTE',
'SCHNAUZER MEDIANO',
'SCHNAUZER MINIATURA',
'SCHNAUZZER MINI',
'SCOTTISH TERRIER',
'SETTER INGLÉS',
'SETTER IRLANDES',
'SHAR PEI',
'SHIBA INU',
'SHIH TZU',
'SHIT-ZU',
'SHITZU X CANICHE',
'SIBERIAN HUSKY',
'SPITZ FINLANDÉS',
'SPITZ PEQUEÑO',
'STAFFORDSHIRE BULL TERRIER',
'TECKEL',
'TECKEL PEL DUR',
'TERRANOVA',
'TIBETAN TERRIER',
'WEIMARANER',
'WEST HIGHLAND WHITE TERRIER',
'WHIPPET',
'X',
'X BEAGLE',
'X BEARDED COLLIE',
'X BICHON',
'X BODEGUERO',
'X BORDER COLLIE',
'X BOXER',
'X BRACO',
'X BRETON',
'X CAÇADOR',
'X CANIXE',
'X CARLINO',
'X CHIHUAHUA',
'X CHOW CHOW',
'X COCKER',
'X COLLIE',
'X DOGO',
'X FOX TERRIER',
'X GOLDEN',
`X GOS D'ATURA`,
'X GRIFFON',
'X HUSKY',
'X JACK RUSELL',
'X JACKRUSSEL',
'X LABRADOR',
'X LLAURADOR',
'X MALTES',
'X MASTI',
'X OVELLER',
'X PAPILLON',
'X PASTOR',
'X PASTOR ALEMAN',
'X PASTOR ALEMANY',
'X PASTOR BELGA',
'X PASTOR DE BRIE',
'X PEQUINES',
'X PETIT',
'X PINSCHER',
'X PITBULL',
'X PODENCO',
'X POINTER',
'X POMERANIA',
'X PRESA CANARI',
'X ROTTWEILER',
'X SABUESO',
'X SCHNAUZZER',
'X SETTER',
'X SHAR PEI',
'X SIBERIAN HUSKY',
'X TECKEL',
'X TERRIER',
'X XIHUAHUA',
'X YORKSHIRE',
'XIHUAHUA',
'YORKI',
'YORKI X MALTES',
'YORKI X SCHNAUZER',
'YORKSHIRE TERRIER',
'YORKSHIRE TERRIER X MALTES',
'ABISINIO',
'ANGORA TURCO',
'AZUL RUSO',
'BENGALI',
'BLAU RUS',
'BOSQUE DE NORUEGA',
'BRITANICO DE PELO CORTO',
'CARTUJO',
'CREUAT',
'EUROPEO DE PELO CORTO',
'EUROPEO X PERSA',
'EUROPEU',
'EUROPEU DE PEL LLARG',
'EUROPEU X SIAMES',
'EXOTIC',
'HIMALAYA',
'MAINE COON',
'NEBELUNG',
'PERSA',
'PERSA X RAGDOLL',
'PERSA XINXILLA',
'RAGDOLL',
'SAGRADO DE BIRMANIA',
'SCOTTISH FOLD',
'SCOTTISH STRAIGHT',
'SIAMES',
'SIAMÉS',
'SIAMES X PERSA',
'SIBERIANA',
'SPHINX',
'SPHYNX',
'X EUROPEA',
'X MAINE COON',
'X PERSA',
'X SIAMES'
]

export {races};