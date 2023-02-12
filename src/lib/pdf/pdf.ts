import BASE_64 from './const'

async function generatePdf() {
    await fetch('Receita_Personalizada.pdf').then(response => {
        response.blob().then(() => {
            let alink = document.createElement('a');
            alink.href = BASE_64
            alink.download = 'Receita_Personalizada.pdf';
            alink.click();
        })
    })
}

export default generatePdf;