const animais = 
[
    {   
        id: 0, 
        nome: "Bobby", 
        fotoPerfil: "https://images.pexels.com/photos/4517653/pexels-photo-4517653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
        apresentacao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", 
        historico: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fotos: [
            "https://images.pexels.com/photos/2539094/pexels-photo-2539094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
            "https://images.pexels.com/photos/2448981/pexels-photo-2448981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
            "https://images.pexels.com/photos/979473/pexels-photo-979473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        informacoesImportantes: {
            responsavel: "Instituto Luísa Mell",
            tempoNoAbrigo: "1 ano",
            dataCadastroFindPet: "25/10/2021",
            idade: "4 anos",
            sexo: "Fêmea",
            raca: "Persa",
            porte: "Pequeno",
            pelo: "Longo",
            cor: "Preto",
            energia: "Moderada",
            bomCom: "Crianças",
            necessidadesEspeciais: "Nenhum",
            gastosMensais: "R$193,00" 
        }
    },
    {   
        id: 1, 
        nome: "Louise", 
        fotoPerfil: "https://images.pexels.com/photos/3155894/pexels-photo-3155894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
        apresentacao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", 
        historico: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fotos: [
            "https://images.pexels.com/photos/2127516/pexels-photo-2127516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
            "https://images.pexels.com/photos/1385183/pexels-photo-1385183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
            "https://images.pexels.com/photos/6853111/pexels-photo-6853111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ],
        informacoesImportantes: {
            responsavel: "ONG Esperança",
            tempoNoAbrigo: "6 meses",
            dataCadastroFindPet: "20/10/2021",
            idade: "2 anos",
            sexo: "Fêmea",
            raca: "SRD",
            porte: "Pequeno",
            pelo: "Curto",                                                              
            cor: "Branco",
            energia: "Alta",
            bomCom: "Outros animais",
            necessidadesEspeciais: "Nenhum",
            gastosMensais: "R$154,90" 
        }
    },
];

const instituicoes = 
[
    {
        id: 0,
        nome: "Instituto Luísa Mell",
        fotoPerfil: "https://images.pexels.com/photos/5255249/pexels-photo-5255249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
        apresentacao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", 
        avaliacoes: {
            cincoEstrelas: 189,
            quatroEstrelas: 38,
            tresEstrelas: 5,
            duasEstrelas: 2,
            umaEstrela: 6,
        },
        contato: {
            email: "contato@institutoluisamell.com",
            telefone: "(11) 4707-0000",
            celular: "(11) 91111-5697",
            endereco: "Rua Qualquer Nome, 3106 - 06614-716 (SP)",
        },
        colaboradores: [
            {
                id: 0,
                nome: "Luísa Mell",
                cargo:  "Fundador",
                foto: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                id: 1,
                nome: "José Albuquerque",
                cargo:  "Diretor",
                foto: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                id: 2,
                nome: "Bianca Moraes",
                cargo:  "Marketing",
                foto: "https://images.pexels.com/photos/3990301/pexels-photo-3990301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
        ],
        campanhas: [
            {
                id: 0,
                titulo: "Evento de Adoção Online 2021",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                local: "Rua Qualquer Nome, 3106 - 06614-716 (SP)",
                horario: "08h30 - 13h30",
                banner: "https://images.pexels.com/photos/9985950/pexels-photo-9985950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
            {
                id: 1,
                titulo: "Campanha de Castração à Preço Popular",
                descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                local: "Rua Qualquer Nome, 3106 - 06614-716 (SP)",
                horario: "09h00 - 11h00",
                banner: "https://images.pexels.com/photos/7694134/pexels-photo-7694134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
        ],
        animais: [
            {
                id: 0,
                nome: "Bobby",
                raca: "Persa",
                fotoPerfil: "https://images.pexels.com/photos/4517653/pexels-photo-4517653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }, 
            {
                id: 1,
                nome: "Louise",
                raca: " SRD",
                fotoPerfil: "https://images.pexels.com/photos/3155894/pexels-photo-3155894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }
        ]
    },
];