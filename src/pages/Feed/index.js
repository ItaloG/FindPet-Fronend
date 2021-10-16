import { useEffect, useState } from "react";
import { Body, ContainerCenter, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import FotoPadrao from "../../assets/default_profile_photo.jpg";
import IconeOng from "../../assets/ong.png";
import IconePetShop from "../../assets/shop.png";
import Banner1 from "../../assets/banner1.png"
import Banner2 from "../../assets/banner2.png"
import Banner3 from "../../assets/banner3.png"
import { api } from "../../services/api";

function Feed() {

    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {
        const loadInstituicoes = async () => {
            try {
                const response = await api.get("/instituicoes");

                console.log(response.data.institutions);
                
                setInstituicoes(response.data.institutions);
            } catch (error) {
                console.log(error.response.data);
            }

        }

        loadInstituicoes();
    }, []);

    const handleIcon = (tipoInstituicao) => {
        console.log(tipoInstituicao);
        return IconeOng
    }

    return (
        <Body>
            <ContainerCenter>
                <FlexColumn>
                    <Slider />
                    {instituicoes.map((i, index) => (
                    <Card
                    foto={FotoPadrao}
                    nome_instituicao={i.nome}
                    icone={handleIcon(i.TypeInstitution)}
                    distancia={0}
                    banner={Banner1}
                    />
                    ))}
                </FlexColumn>
            </ContainerCenter>
        </Body>
    );
}

export default Feed;