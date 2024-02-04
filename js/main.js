// variaveis do tema dark e light
const modo_dl = [...document.querySelectorAll('.modo_dl')]
const modo_dl_span_img = [...document.querySelectorAll('.modo_dl span img')]
const body = document.querySelector('body')
const logo = [...document.querySelectorAll('.logo img')]
const img_progamador = [...document.querySelectorAll('.img_progamador img')]

// variaveis do botao menu mobile
const btn_mobile = document.querySelector('#btn_mobile')
const menu_mobile = document.querySelector('#menu_mobile')

// variaveis da sessao tecnologia
const tec_imgs = [...document.querySelectorAll('.tec_imgs')]
const tec_p = [...document.querySelectorAll('.tec_p')]

// variaveis da sessao projetos
const card_container = document.querySelector('#container_projetos')
const cards = [...document.querySelectorAll('.cards')]
const seta = [...document.querySelectorAll('.seta')]
const card_tec_html = [...document.querySelectorAll('.card_tec_html')]
const card_tec_css = [...document.querySelectorAll('.card_tec_css')]
const card_tec_js = [...document.querySelectorAll('.card_tec_js')]
const card_descricao = document.querySelectorAll('.card_descricao')
const text = [...document.querySelectorAll('.text')]
const card_descricao_titulo = [...document.querySelectorAll('.card_descricao_titulo')]
let validacao = false
const verde_claro = '#2ca880'
const verde_escuro = 'rgb(34, 117, 117)'
const azul_claro = 'rgb(78, 231, 231)'
const azul_escuro = 'rgb(44, 151, 151)'



// configuracao do tema dark e light
modo_dl.forEach((el)=>{
    el.addEventListener('click',()=>{
        body.classList.toggle('dark')
        
        if (body.classList.contains('dark')){
            modo_dl_span_img.forEach((el_span)=>{
                el_span.src = 'img/img-lua.png'
                // mudando a logo
                logo.forEach((el_logo)=>{
                    el_logo.src = 'img/logo-front-verde.png'
                })
            })
            // mudando a foto de progamador para verde
            img_progamador.forEach((el_progamador)=>{
                el_progamador.src = 'img/progamador-verde.png'
            })
            
            // mudando o fundo do container de projetos
            cards.forEach((el_card)=>{
                el_card.style.background = verde_claro
            })
            if (validacao===true){
                card_container.style.background = verde_escuro 
                cards.forEach((el_card)=>{
                    el_card.style.background = verde_claro
                })
            }
            
        } else {
            modo_dl_span_img.forEach((el_span)=>{
                el_span.src = 'img/img-sol.png'
            })
            // mudando a logo
            logo.forEach((el_logo)=>{
                el_logo.src = 'img/img-front-end.png'
            })
            // mudando a foto de progamador para azul
            img_progamador.forEach((el_progamador)=>{
                el_progamador.src = 'img/progamador-azul.png'
            })
            // mudando o fundo do container de projetos
            cards.forEach((el_card)=>{
                el_card.style.background = azul_claro
            })
            if (validacao===true){
                card_container.style.background = azul_escuro
                cards.forEach((el_card)=>{
                    el_card.style.background = azul_claro
                })
            } 
        }
        // configuracao da broda da tecnologia
        let darkAtivo = body.classList.contains('dark')
        tec_imgs.forEach((el)=>{
            if (el.classList.contains('borda_azul') && darkAtivo===true){
                el.classList.remove('borda_azul')
                el.classList.add('borda_verde')
            } else if(el.classList.contains('borda_verde') && !darkAtivo){
                el.classList.remove('borda_verde')
                el.classList.add('borda_azul')
            }
        })

    })
})

// configuracao do menu mobile
btn_mobile.addEventListener('click',()=>{
    btn_mobile.classList.toggle('animacao_btn_menu')
    menu_mobile.classList.toggle('animacao_show_menu_mobile')
})

menu_mobile.addEventListener('click',()=>{
    btn_mobile.classList.toggle('animacao_btn_menu')
    menu_mobile.classList.toggle('animacao_show_menu_mobile')
})

window.addEventListener('resize',()=>{
    let larguraDaTela = window.innerWidth;
    if(larguraDaTela>900 && menu_mobile.classList.contains('animacao_show_menu_mobile')){
        menu_mobile.classList.remove('animacao_show_menu_mobile')
        btn_mobile.classList.remove('animacao_btn_menu')
    } 
})

// configuracao da borda e mostrar o conteudo da tecnologia
tec_imgs.forEach((el,index)=>{
    el.addEventListener('click',()=>{
        // adicionando a borda (dark/white)
        tec_imgs.forEach((el_img)=>{
            el_img.classList.remove('borda_verde')
            el_img.classList.remove('borda_azul')
        })
        if (body.classList.contains('dark')){
            el.classList.add('borda_verde')
        } else {
            el.classList.add('borda_azul')
        }
        // exibindo o conteudo
        tec_p.forEach((el_p)=>{
            el_p.classList.remove('tec_p_show')
        })
        tec_p[index].classList.add('tec_p_show')

    })
})

// configuracao da aparicao dos nomes das tecnologia da sessao projetos
card_tec_html.forEach(card => {
    card.addEventListener('mouseover', function() {
      this.setAttribute('title', 'HTML');
    });
  
    card.addEventListener('mouseout', function() {
      this.removeAttribute('title');
    });
});

card_tec_css.forEach(card => {
    card.addEventListener('mouseover', function() {
      this.setAttribute('title', 'CSS');
    });
  
    card.addEventListener('mouseout', function() {
      this.removeAttribute('title');
    });
});

card_tec_js.forEach(card => {
    card.addEventListener('mouseover', function() {
      this.setAttribute('title', 'JavaScript');
    });
  
    card.addEventListener('mouseout', function() {
      this.removeAttribute('title');
    });
});

// configuracao dos paragrafos dos projetos
cards.forEach((el)=>{
    el.addEventListener('click',()=>{
        validacao = true
        cards.forEach((el_card)=>{
            el_card.style.display = 'none'
        })
        el.style.display = 'flex'
        
        cards.forEach((el_card)=>{
            el_card.style.cursor = 'context-menu'
        })

        text.forEach((el_text)=>{
            el_text.classList.remove('limite_text')
        })

        card_container.style.padding = '80px 5% 5% 5%'
        let IsDark = body.classList.contains('dark')
        if (IsDark===true){
            card_container.style.background = verde_escuro
        } else{
            card_container.style.background = azul_escuro
            
        }

       
        seta.forEach((el_seta)=>{
            el_seta.style.display = 'block'
        })

        let largura_tela_1 = window.innerWidth
        if (largura_tela_1>900){
            cards.forEach((el_card)=>{
                el_card.style.width = '100%'
                el_card.style.height = '350px'
                el_card.style.flexDirection = 'row'
            })
            card_descricao.forEach((el_des)=>{
                el_des.style.padding = '0 0 0 10px'
            })
        } else {
            cards.forEach((el_card)=>{
                el_card.style.width = '100%'
                el_card.style.height = '500px'
                el_card.style.flexDirection = 'column'
            })
            card_descricao.forEach((el_des)=>{
                el_des.style.padding = '10px 0 0 0'
            })
        }

        window.addEventListener('resize',()=>{
            let largura_tela_2 = window.innerWidth
            if (largura_tela_2>900){
                cards.forEach((el_card)=>{
                    el_card.style.width = '100%'
                    el_card.style.height = '350px'
                    el_card.style.flexDirection = 'row'
                })
                card_descricao.forEach((el_des)=>{
                    el_des.style.padding = '0 0 0 10px'
                })
            } else {
                cards.forEach((el_card)=>{
                    el_card.style.width = '100%'
                    el_card.style.height = '500px'
                    el_card.style.flexDirection = 'column'
                })
                card_descricao.forEach((el_des)=>{
                    el_des.style.padding = '10px 0 0 0'
                })
            }
        })

    })
})
     

// quando clicar na seta de voltar
seta.forEach((el)=>{
    el.addEventListener('click',()=>{
        validacao = false
        cards.forEach((el_card)=>{
            el_card.style.display = 'flex'
        })
        el.style.display = 'none'
        card_container.style.padding = '0'
        card_container.style.background = 'transparent'

        cards.forEach((el_card)=>{
            el_card.style.cursor = 'pointer'
        })
        text.forEach((el_text)=>{
            el_text.classList.add('limite_text')
        })


        let largura_tela_1 = window.innerWidth
        if (largura_tela_1>900){
            cards.forEach((el_card)=>{
                el_card.style.flexDirection = 'column'
                el_card.style.width = '300px'
                el_card.style.height = '350px'
            })
            card_descricao.forEach((el_des)=>{
                el_des.style.padding = '10px 0 0 0'
            })
        } else {
            cards.forEach((el_card)=>{
                el_card.style.flexDirection = 'column'
                el_card.style.width = '100%'
                el_card.style.height = '350px'
            })
            card_descricao.forEach((el_des)=>{
                el_des.style.padding = '10px 0 0 0'
            })
        }

        window.addEventListener('resize',()=>{
            let largura_tela_2 = window.innerWidth
            if (largura_tela_2>900){
                cards.forEach((el_card)=>{
                    el_card.style.flexDirection = 'column'
                    el_card.style.width = '300px'
                    el_card.style.height = '350px'
                })
                card_descricao.forEach((el_des)=>{
                    el_des.style.padding = '10px 0 0 0'
                })
            } else {
                cards.forEach((el_card)=>{
                    el_card.style.flexDirection = 'column'
                    el_card.style.width = '100%'
                    el_card.style.height = '350px'
                })
                card_descricao.forEach((el_des)=>{
                    el_des.style.padding = '10px 0 0 0'
                })
            }

        })
    })
})