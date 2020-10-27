const pontuacaoUsuario = 999;

const nvUsuario = (pontuacaoUsuario >= 100) ? 'VIP' : 'NORMAL';

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal!');
}