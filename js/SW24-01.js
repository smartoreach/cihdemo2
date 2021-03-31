// Client Section - Generate Cards
let logoData = [
{ url: './images/partner1.webp', name: 'Rama_Petroleum', altText: 'Rama Petroleum Logo', link: 'javascript:void()'},
{ url: './images/partner3.webp', name: 'DG_Impianti', altText: 'IREM Logo', link: 'https://www.iremspa.it/'},
{ url: './images/partner2.webp', name: 'IREM', altText: 'DG Impianti Logo', link: 'https://www.dgimpianti.info/en/'},
{ url: './images/partner4.webp', name: 'Global_Chemical_Company', altText: 'Global Chemical Company Logo', link: 'https://globalchem.kz/'},
{ url: './images/partner5.webp', name: 'Consilliari_Partners', altText: 'Consilliari Partners Logo', link: 'http://consiliari.co.uk/'},
{ url: './images/partner6.webp', name: 'ItalFluid', altText: 'ItalFluid Logo', link: 'https://www.italfluid.com/'},
{ url: './images/partner7.webp', name: 'Alatau_Technospray', altText: 'Alatau Technospray Logo', link: 'http://www.flamespray.org/'},
{ url: './images/partner8.webp', name: 'Alatau_Construction_Holding', altText: 'Alatau Construction Holding Logo', link: 'javascript:void()'}
];

let htmlstr = "";


logoData.map(item => {
    console.log(item)
htmlstr += `<a href=${item.link} target="_blank" class='SW24-01-card'>
<div class='SW24-01-img-cover'>
<img class='SW24-01-img' title=${item.name} src=${item.url} alt=${item.altText}>
</div>
</a> `
});

$('.SW24-01-cards-wrapper').html(htmlstr);
