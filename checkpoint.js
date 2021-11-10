
function microondas (comida, tempo) {
    switch (comida) {
        case 'pipoca':
            if (tempo < 10){
                console.log('Tempo insuficiente');
            } else if (tempo >= 10 ) {
                console.log('Prato Pronto, bom apetite!!!');
            } else if (tempo >= 20) {
                console.log('A comida queimou');
            } else if (tempo >= 30) {
                console.log('Kabumm!!!');
            }
        break;
        case 'macarrao':
            if (tempo < 8){
                console.log('Tempo insuficiente')
            } else if (tempo >= 8) {
                console.log('Prato Pronto, bom apetite!!!')
            } else if (tempo >= 16) {
                console.log('A comida queimou')
            } else if (tempo >= 24) {
                console.log('Kabumm!!!')
            } 
        break;
        case 'carne':
            if (tempo < 15){
                console.log('Tempo insuficiente')
            } else if (tempo >= 15 ) {
                console.log('Prato Pronto, bom apetite!!!')
            } else if (tempo >= 30) {
                console.log('A comida queimou')
            } else if (tempo >= 45) {
                console.log('Kabumm!!!')
            } 
        break;
        case 'feijao':
            if (tempo < 10) {
                console.log('Tempo insuficiente!')
            }            
              else if (tempo >= 10 ) {
                console.log('Prato Pronto, bom apetite!!!')
            } else if (tempo >= 20) {
                console.log('A comida queimou')
            } else if (tempo >= 30) {
                console.log('Kabumm!!!')
            } 
        break;
        case 'brigadeiro':
            if (tempo < 10){
                console.log('Tempo insuficiente')
            } else if (tempo >= 8 ) {
                console.log('Prato Pronto, bom apetite!!!')
            } else if (tempo >= 16) {
                console.log('A comida queimou')
            } else if (tempo >= 24) {
                console.log('Kabumm!!!')
            } 
        break;
        default:
            console.log('Prato Inexistente')
    }
};


console.log(microondas('pipoca', 7));
