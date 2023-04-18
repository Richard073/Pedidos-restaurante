
let OpenTable = prompt("deseja abrir mesa? (sim/nao)")
let itensMesa = 0
let itens=""
let option= ""
let nameItens=""
do {
    option= prompt(`Quantidade de itens: ${itensMesa} -- Gostaria de:
    1. fazer pedido
    2. fechar conta `)
     switch (option) {
        case "1":
            let pedido = prompt(`escolha uma opção:
            1. bebida
            2. comida
            3. sobremesa`)
                switch(pedido){
                   
                    case "1":
                        nameItens= prompt(`escolha o iten:\n água\n chopp\n refrigerante`)
                        itens+= ` ${nameItens}\n`
                        itensMesa++
                    break
                    case "2":
                        nameItens= prompt(`escolha o iten:\n pastel\n ancho\n batata`)
                        itens+= `${nameItens}\n`
                        itensMesa++
                    break
                    case "3":
                       nameItens= prompt(`escolha o iten:\n pudim\n churros\n banoffe`)
                       itens+= `${nameItens}\n`
                       itensMesa++
                    break
                        default:
                            alert("escolha invalida")
                    break
                }

            break;
        case "2":
            alert(`A sua conta fechou com ${itensMesa} itens:\n Os itens são\n ${itens}`)
            break;
     
        default:
            alert("opção invalida")
            break;
     }
} while (option!=="2");


