import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react"
import "./about.css"
import {  Stack } from '@mui/material';
import web from "../../assets/web.jpg"
const About=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div id='about'>
            <h3 className='melumat'>Məlumat</h3>
        <div data-aos="fade-up-right">
<Stack className='aboutphotoline' flexDirection="row" alignItems="center" gap="5%">
    <div className='textnamebox'>

            <h3 className='textsabout'>

            “ Veb-sayt yaradılması şəkil və məzmunla bağlı bütün vizual, audio hissələrini əhatə edən bir prosesdir. Veb saytlara daxil olduğunuz zaman qarşılaşdığınız rəngarəng mövzular, fonlar, şriftlər, dizayn şəkilləri və bunları istifadəçilərin diqqətinə çatdırmaq üçün uyğunlaşdırmaq, səhifəyə yerləşdirmək kimi proseslərə front-end deyilir.     Front-end” developer üç əsas proqramlaşdırma dili olan “HTML”, “CSS” və “JavaScript”-dən istifadə edən, qeyd etdiyimiz veb istifadəçilərinin qarşılaşdıqları ilk səhifənin bütün dizaynlarını və yaradılmasını həyata keçirə bilən şəxsdir.
“Front-end”-in öz bölmələri var. Məsələn, mətnlərə, şəkillərə aid redaktələr; Şəklin şrifti, rəngi, görünüşü, ölçüsü və fonu kimi mövzuları ehtiva edir. Bundan başqa, mətnlərin və şəkillərin səhifədə yerləşdirilməsi və səhifənin strukturlaşdırılması ilə bağlı məsələlər başqa bir alt bölmədir. Bu alt bölmə ilə məşğul olmaq istəyirsinizsə, “JavaScript” dilini bilmək kifayətdir. Başqa interfeyslərdən istifadə etmək lazım deyil. Ancaq mətn və şəkillər yaratmaq niyyətindəsinizsə hər üç dili bilməlisiniz. Front Endçi kimi işləmək niyyətindəsinizsə bir dildə ixtisaslaşmağınız kifayət edər.
            </h3>
    </div>

<img className='aboutphoto' style={{maxWidth:"700px"}} src={web } alt="" />
</Stack>




        </div>
        </div>
        </>
    )
}
export default About