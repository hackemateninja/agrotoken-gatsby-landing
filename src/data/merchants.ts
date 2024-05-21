export interface IMerchantItem {
	id?: string;
	name?: string;
	img?: { url?: string };
}
export interface IMerchants {
	id: string;
	name: string;
	merchants: Array<IMerchantItem>;
}

import { ISectionListItem } from '@comp/section-list/types';

const merchantsBenefits: Array<ISectionListItem> = [
	{
		id: '1',
		text: 'merchantsBenefits.1',
	},
	{
		id: '2',
		text: 'merchantsBenefits.2',
	},
	{
		id: '3',
		text: 'merchantsBenefits.3',
	},
	{
		id: '4',
		text: 'merchantsBenefits.4',
	},
];

/*const merchants: Array<IMerchants> = [
	{
		id: '1',
		name: 'affiliatedCat.1',
		merchants: [
			{
				id: '1',
				name: 'Bioflim',
				img: {
					url: '/images/merchants/Biofilm.jpeg',
				}
			},
			{
				id: '2',
				name: 'RIZOBACTER',
				url: {
					img: '/images/merchants/Rizobacter.png',
				}
			},
			{
				id: '3',
				name: 'SIGMA AGRO',
				img: '/images/merchants/SigmaAgro.png',
			},
			{
				id: '4',
				name: 'UPL',
				img: '/images/merchants/UPL.png',
			},
			{
				id: '6',
				name: 'ATANOR',
				img: '/images/merchants/Atanor.png',
			},
			{
				id: '7',
				name: 'gleba',
				img: '/images/merchants/Gleba.png',
			},
			{
				id: '8',
				name: 'PROFERTIL',
				img: '/images/merchants/Profertil.png',
			},
			{
				id: '9',
				name: 'Don Mario',
				img: '/images/merchants/DonMarioSemillas.png',
			},
			{
				id: '10',
				name: 'Natalseeds',
				img: '/images/merchants/Natalseeds.png',
			},
			{
				id: '11',
				name: 'NK',
				img: '/images/merchants/NKSemillas.png',
			},
			{
				id: '12',
				name: 'ADVANTA',
				img: '/images/merchants/Advanta.png',
			},
			{
				id: '13',
				name: 'Argensun',
				img: '/images/merchants/Argensun.png',
			},
			{
				id: '14',
				name: 'kumagro',
				img: '/images/merchants/Kumagro.png',
			},
			{
				id: '15',
				name: 'PGG Wrighton Seeds',
				img: '/images/merchants/PGGWrightsonSeeds.png',
			},
			{
				id: '16',
				name: 'NIDERA SEMILLAS',
				img: '/images/merchants/NideraSemillas.jpeg',
			},
		],
	},
	{
		id: '2',
		name: 'affiliatedCat.2',
		merchants: [
			{
				id: '1',
				name: 'leveal',
				img: '/images/merchants/Leveal.png',
			},
			{
				id: '2',
				name: 'PUMA ENERGY',
				img: '/images/merchants/Puma.png',
			},
			{
				id: '3',
				name: 'ZAGABRA S.A.',
				img: '/images/merchants/Zagabria.png',
			},
		],
	},
	{
		id: '3',
		name: 'affiliatedCat.3',
		merchants: [
			{
				id: '1',
				name: 'Volkswagen Strianese ',
				img: '/images/merchants/Strianese.jpeg',
			},
			{
				id: '2',
				name: 'Volkswagen espasa',
				img: '/images/merchants/Espasa.png',
			},
			{
				id: '3',
				name: 'Volkswagen dietrich',
				img: '/images/merchants/Dietrich.jpeg',
			},
			{
				id: '4',
				name: 'TOYOTA CATRIEL MAPU S.A. ',
				img: '/images/merchants/CatrielMapuToyota.png',
			},
			{
				id: '5',
				name: 'TOYOTA UZCUDUN',
				img: '/images/merchants/UzcudunToyota.png',
			},
			{
				id: '6',
				name: 'TOYOTA ZENTO',
				img: '/images/merchants/ToyotaZento.png',
			},
			{
				id: '7',
				name: 'NISSAN Noale',
				img: '/images/merchants/NissanNoale.png',
			},
		],
	},
	{
		id: '4',
		name: 'affiliatedCat.4',
		merchants: [
			{
				id: '1',
				name: 'John Deere Ratto Hnos',
				img: '/images/merchants/JohnDeereRattoHnos.jpeg',
			},
			{
				id: '2',
				name: 'John Deere Vanderhoeven Agrícola SA',
				img: '/images/merchants/JohnDeereVanderhoevenAgricola.png',
			},
			{
				id: '3',
				name: 'John Deere Diesel Lange',
				img: '/images/merchants/JohnDeereRattoHnos.jpeg',
			},
			{
				id: '4',
				name: 'ItarsAGRO',
				img: '/images/merchants/Itarsagro.jpeg',
			},
			{
				id: '5',
				name: 'New Holland Ferrero Tractores SRL',
				img: '/images/merchants/NewHollandFerrero.png',
			},
			{
				id: '6',
				name: 'MD',
				img: '/images/merchants/MD.png',
			},
			{
				id: '7',
				name: 'Juri',
				img: '/images/merchants/Juri.png',
			},
			{
				id: '8',
				name: 'KELLY New Holland',
				img: '/images/merchants/NewHollandKelly.png',
			},
			{
				id: '9',
				name: 'nameINA',
				img: '/images/merchants/nameina.jpeg',
			},
			{
				id: '10',
				name: 'Nievas',
				img: '/images/merchants/Nievas.jpeg',
			},
		],
	},
	{
		id: '5',
		name: 'affiliatedCat.5',
		merchants: [
			{
				id: '1',
				name: 'La Bragadense S.A.',
				img: '/images/merchants/LABragadense.png',
			},
			{
				id: '2',
				name: 'RIVARA',
				img: '/images/merchants/RivaraSA.png',
			},
			{
				id: '3',
				name: 'LARTIRIGOYEN',
				img: '/images/merchants/Lartirigoyen.png',
			},
			{
				id: '4',
				name: 'MOLINOSagro',
				img: '/images/merchants/MolinosAgro.png',
			},
			{
				id: '5',
				name: 'Gaviglio',
				img: '/images/merchants/Gaviglio.png',
			},
			{
				id: '6',
				name: 'Ceres Tolvas',
				img: '/images/merchants/CeresTolva.png',
			},
			{
				id: '7',
				name: 'EBC BAYÁ CASAL',
				img: '/images/merchants/BayaCasal.png',
			},
			{
				id: '8',
				name: 'Grobocopatel Hnos S.A.',
				img: '/images/merchants/Grobocopatel.png',
			},
			{
				id: '9',
				name: 'AMAGGI',
				img: '/images/merchants/Amaggi.png',
			},
			{
				id: '10',
				name: 'INnameRO',
				img: '/images/merchants/Innamero.png',
			},
			{
				id: '11',
				name: 'Pelayo',
				img: '/images/merchants/Pelayo.png',
			},
			{
				id: '12',
				name: 'fyo',
				img: '/images/merchants/Fyo.png',
			},
			{
				id: '13',
				name: 'EDPagro',
				img: '/images/merchants/EDPagro.png',
			},
			{
				id: '14',
				name: 'H.J. NAVAS y Cía.',
				img: '/images/merchants/HJNavas.png',
			},
			{
				id: '15',
				name: 'AIBAL',
				img: '/images/merchants/Aibal.png',
			},
			{
				id: '16',
				name: 'GUILLERMO LEHMANN',
				img: '/images/merchants/GuillermoLehmann.png',
			},
			{
				id: '17',
				name: 'TOMÁS',
				img: '/images/merchants/TomasHnos.png',
			},
		],
	},
	{
		id: '6',
		name: 'affiliatedCat.6',
		merchants: [
			{
				id: '1',
				name: 'A.J. MENDIZABAL y Cía. CONSIGNATARIOS',
				img: '/images/merchants/MendizabalConsignataria.jpeg',
			},
			{
				id: '2',
				name: 'LARTIRIGOYEN & OROMÍ S.A. CONSIGNATARIA DE HACIENDA',
				img: '/images/merchants/LartirigoyenOromi.png',
			},
			{
				id: '3',
				name: 'COLOMBO y COLOMBO',
				img: '/images/merchants/ColomboyColombo.jpeg',
			},
			{
				id: '4',
				name: 'DURRIEU consignatarios',
				img: '/images/merchants/DurrieuConsignataria.jpeg',
			},
			{
				id: '5',
				name: 'CONSIGNATARIA MELICURA S.A.',
				img: '/images/merchants/Melicura.png',
			},
			{
				id: '6',
				name: 'MECANO GANADERO',
				img: '/images/merchants/MecanoGanadero.jpeg',
			},
			{
				id: '7',
				name: 'EDECAN Silos',
				img: '/images/merchants/Edecan.png',
			},
		],
	},
	{
		id: '7',
		name: 'affiliatedCat.7',
		merchants: [
			{
				id: '1',
				name: 'Primia',
				img: '/images/merchants/Primia.png',
			},
			{
				id: '2',
				name: 'PRENUT',
				img: '/images/merchants/Prenut.png',
			},
		],
	},
	{
		id: '8',
		name: 'affiliatedCat.8',
		merchants: [
			{
				id: '1',
				name: 'AGROPACK',
				img: '/images/merchants/Agropack.png',
			},
			{
				id: '2',
				name: 'alborada',
				img: '/images/merchants/Alborada.png',
			},
			{
				id: '3',
				name: 'WFU INSUMOS AGROPECUARIOS',
				img: '/images/merchants/WFUInsumos.png',
			},
			{
				id: '4',
				name: 'LMR Grupo',
				img: '/images/merchants/LMR.png',
			},
			{
				id: '5',
				name: 'Sumidás',
				img: '/images/merchants/Sumidas.png',
			},
			{
				id: '6',
				name: 'FDAGRO INSUMOS AGROPECUARIOS',
				img: '/images/merchants/FDAgro.jpeg',
			},
			{
				id: '7',
				name: 'Fedea',
				img: '/images/merchants/Fedea.jpeg',
			},
			{
				id: '8',
				name: 'elkiri',
				img: '/images/merchants/Elkiri.png',
			},
			{
				id: '9',
				name: 'SAN DIEGO',
				img: '/images/merchants/SanDiego.png',
			},
			{
				id: '10',
				name: 'El Cardo',
				img: '/images/merchants/ElCardo.jpeg',
			},
			{
				id: '11',
				name: 'DFH',
				img: '/images/merchants/DFH.png',
			},
			{
				id: '12',
				name: 'ERRAZURI',
				img: '/images/merchants/Errazuri.jpeg',
			},
			{
				id: '13',
				name: 'TOSTER AGROINSUMOS',
				img: '/images/merchants/TosterAgroinsumos.png',
			},
			{
				id: '14',
				name: 'Desab',
				img: '/images/merchants/Desab.png',
			},
			{
				id: '15',
				name: 'HENDAGRO',
				img: '/images/merchants/Hendagro.png',
			},
			{
				id: '16',
				name: 'SURCOS',
				img: '/images/merchants/Surcos.png',
			},
			{
				id: '17',
				name: 'Agro LEBEN SRL',
				img: '/images/merchants/AgroLeben.jpeg',
			},
		],
	},
	{
		id: '9',
		name: 'affiliatedCat.9',
		merchants: [
			{
				id: '1',
				name: 'IOF Internet of Fields',
				img: '/images/merchants/IOF.png',
			},
			{
				id: '2',
				name: 'Auravant',
				img: '/images/merchants/Auravant.png',
			},
			{
				id: '3',
				name: 'Agrofy',
				img: '/images/merchants/Agrofy.jpeg',
			},
			{
				id: '4',
				name: 'RUS Agro',
				img: '/images/merchants/Rusagro.jpeg',
			},
			{
				id: '5',
				name: 'HUMBER',
				img: '/images/merchants/Humber.png',
			},
		],
	},
];
*/
export { merchantsBenefits };
