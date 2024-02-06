import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { Box, Grid, Stack } from "@mui/material"
import html from "../../assets/htmllogo.png"
import javascript from "../../assets/java.png"
import react from "../../assets/Reactlogo.png"
import css from "../../assets/Csslogo.png"
import "./course.css"
import htmlbook from "../../assets/htmlbook.jpg"
import reactbook from "../../assets/reactbook.jpg"
import javascriptbook from "../../assets/learnt.jpg"

const Course=()=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
        <div id="kurs">
        <div data-aos="flip-left">

<h3 className='kurs'>Mənbə və Kurslar</h3>
<Stack className='frontabouts'>

            <Box className="box">
<img style={{width:"60px"}} src={html} alt="" />
<h3>HTML nədir?</h3>
<p className='htmltext'>
İngilis dilində açılışı "Hyper Text Markup Language" olan HTML,  Azərbaycan dilinə "Hipermətn İşarələmə Dili" kimi tərcümə edilən mətn işarələmə dilidir. Qeyd etmək lazım olan mühüm bir məqam var; o da budur ki, HTML skript və ya proqramlaşdırma dili deyil. HTML nədir? deyənlər üçün işarələmə dili olaraq ən qısa formada cavab vermək olar. HTML, kompüterlərimizdə, telefonumuzda istifadə etdiyimiz veb saytların yaradılmasında istifadə olunur. Eyni zamanda hazırlanmış səhifələrin veb-brauzerdə düzgün göstərilməsini təmin edir. Chrome, Firefox və Opera kimi brauzerlər html kodlarını emal edərək və bu kodları veb səhifələrə çevirir. Qısaca desək, HTML vebin təməl sütunudur.
</p>

            </Box>


            <Box className="box2">
<img style={{width:"60px"}} src={javascript} alt="" />
<h3>Javascript nədir?</h3>
<p className='htmltext'>
JavaScript, veb tərtibatçılarının veb səhifələri, tətbiqləri, serverləri və hətta oyunları inkişaf etdirərkən daha dinamik qarşılıqlı əlaqə yaratmaq üçün istifadə etdiyi sinxron və single-thread proqramlaşdırma (skript) dilidir. Yəni sətir-sətir işləyir və bir sətir yerinə yetirilənə və əməliyyat başa çatana qədər digərinə keçmir. Single-thread: Javascript mühərriki bir anda yalnız bir işi görür. C#, Java (Multi-thread proqramlaşdırma) kimi dillərdə yaradılmış thread strukturları ilə multi-thread əməliyyatı təmin edilsə də, bu, javascript-də mümkün deyil, bütün proseslər bir thread üzərində və eyni zamanda bir prosessor nüvəsində işləyir.
</p>

            </Box>

</Stack>

<Stack className='frontabouts'>

          

            <Box className="box3">
<img style={{width:"60px"}} src={css} alt="" />
<h3>Css nədir?</h3>
<p className='htmltext'>
Veb saytlarda səhifələri formatlaşdırmaq və üslub qaydalarını müəyyən etmək üçün istifadə edilən CSS, veb saytların vizuallığını formalaşdırmaq və üzə çıxarmağa imkanı verir. 

CSS ilə siz veb səhifələrin tərtibatı, rəngləri, istifadə olunan şriftlər, başlıqlar, vizual effektlər və digər vizual elementlər üzərində, effektiv və funksional nəzarəti təmin edə bilərsiniz. İstifadəçi dostu və vizual olaraq təsirli vebsaytlar üçün HTML və JavaScript-ə əlavə olaraq yazılmış CSS kodları son dərəcə vacibdir. Effektiv CSS kodlaşdırması veb-saytlara yüksək istifadə imkanı verir.
</p>

            </Box>

            <Box className="box4">
<img style={{width:"60px"}} src={react} alt="" />
<h3>React nədir?</h3>
<p className='htmltext'>
React.js bir JavaScript kitabxanasıdır. Bununla biz bir web-səhifə hazırlaya bilərik (qısa sözlə desək UI hazırlamaq). Diqqət etdinizsə mən “kitabxanadır” dedim, yəni framework deyil!. React-ın tək vəzifəsi interfeysdəki bütün işləri ən məntiqli, ən sadə, ən performanslı yol ilə hazırlamaqdır. Bunu necə edir? Bunu necəetdiyini izah etmək üçün React’ı biraz daha texniki tərəfdən izah edək; React,component(element) əsaslı, Virtual DOM memarlığı(başqa söz tapmadım izah etməyə😅) istifadə edən bir Frontend kitabxanasıdır. Birazdan bunların nə olduğu haqqında ətraflı danışacağam.
</p>

            </Box>
</Stack>
            
         
 

        
          



        </div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
<Box marginTop="25px">

<Stack className='aboutvideo'  >
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/2hGCDluJGqw?si=Lf91SJnsC1FBbGEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/jiCSs0Weiqk?si=U6C1rE7tcsQLyHET" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Stack>

<Stack className='aboutvideo' >
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/XlDMdKznPhU?si=2YW5UCHstFz81FUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/EX3tXMevWyo?si=q6rkr9rd3bVrwaz7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Stack>

<Stack  className='aboutvideo' >
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/G4PDll3vcU8?si=DMQHz2JCXJjinqnC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/8A7RWDgkXgg?si=36kTjI3aHIwZ6SGW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Stack>

<Stack  className='aboutvideo' >
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/Zg6FBHC-W_0?si=ock1LPU8CnBdbGZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='videosinformation' width="460" height="215" src="https://www.youtube.com/embed/slVS7QNsSk8?si=iQ1_hQ-FVYBTMGJK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</Stack>
</Box>
</div>


  
<Stack className='courspas' >
    <a href="https://www.kitabyurdu.org/kitab/it/1806-html-in-esaslari-kursu.html">

    <img className='coursbooksd' style={{width:"250px"}} src={htmlbook} alt="" />
    </a>

    <a href="https://azkurs.org/pars_docs/refs/32/31757/31757.pdf">

<img className='coursbooksd' style={{width:"250px"}} src={javascriptbook} alt="" />
</a>

<a href="https://az.legacy.reactjs.org/tutorial/tutorial.html">

<img className='coursbooksd' style={{width:"240px"}} src={reactbook} alt="" />
</a>

</Stack>




        </div>
        
        </>
    )
}

export default Course