import { useEffect, useState } from "react";
import { Body, ContainerCenter, FlexColumn } from "../../GlobalStyles";
import Card from "../../components/Card";
import Slider from "../../components/Slider";
import FotoPadrao from "../../assets/default_profile_photo.jpg";
import IconeOng from "../../assets/ong_icon.png";
import IconePetShop from "../../assets/petshop_icon.png";
import IconeVeterinario from "../../assets/veterinario_icon.png"
import BannerDefault from "../../assets/default_banner.png"
import { api } from "../../services/api";

function Feed() {

    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {
        const loadInstituicoes = async () => {
            try {
                const response = await api.get("/instituicoes");

                setInstituicoes(response.data.institutions);
            } catch (error) {
                console.log(error.response.data);
            }

        }

        loadInstituicoes();
    }, []);

    const handleIcon = (tipoInstituicao) => {
        if (tipoInstituicao === "ONG") {
            return IconeOng
        } else if (tipoInstituicao === "PETSHOP") {
            return IconePetShop
        } else if (tipoInstituicao === "VETERINARIO") {
            return IconeVeterinario
        }
    }

    return (
        <Body>
            <ContainerCenter>
                <FlexColumn>
                    <Slider />
                    {instituicoes.map((i, index) => (
                        <Card
                            key={index}
                            foto={i.url_foto_perfil ? i.url_foto_perfil : FotoPadrao}
                            nome_instituicao={i.nome}
                            icone={handleIcon(i.TypeInstitution.type_institution)}
                            distancia={0}
                            banner={i.url_foto_banner ? i.url_foto_banner : BannerDefault}
                        />
                    ))}
                </FlexColumn>
            </ContainerCenter>
        </Body>
    );
}

export default Feed;