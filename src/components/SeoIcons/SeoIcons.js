import React from 'react';

import SeoIconsBox from './SeoIconsBox';

import iconDiagnosis from '../../assets/icons/seo/diagnosis.svg'; 
import iconDiscretion from '../../assets/icons/seo/dicretia.svg'; 
import iconReceipt from '../../assets/icons/seo/e-receipt.svg'; 
import iconQuickness from '../../assets/icons/seo/quickness.svg'; 
import iconReservation from '../../assets/icons/seo/reservation.svg'; 
import iconVideo from '../../assets/icons/seo/video.svg'; 

const SeoIcons = () => (
  <section className="seo-icons">

    <SeoIconsBox 
      icon={iconReservation}
      title="Rezerwacja on-line"
      text="Nie musisz dzwonić i pisać maili, wystarczy lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    
    <SeoIconsBox 
      icon={iconDiscretion}
      title="Pełna dyskrecja"
      text="Możesz mieć pewność nec lacinia orci. Suspendisse non urna euismod, venenatis urna sed, faucibus magna." />
    
    <SeoIconsBox 
      icon={iconVideo}
      title="Konsultacja video"
      text="Dla Waszej wygody lass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeo." />
    
    <SeoIconsBox 
      icon={iconReceipt}
      title="E-recepta"
      text="W ramach konstultacji mogę wystawić Tobie raesent fermentum vestibulum mi, sit amet scelerisque ex ultrices at." />
    
    <SeoIconsBox 
      icon={iconQuickness}
      title="Szybkośc i prostota"
      text="Jeszcze nie było tak raesent nec ullamcorper lacus. Pellentesque non ipsum eget est fermentum con." />
    
    <SeoIconsBox 
      icon={iconDiagnosis}
      title="Diagnoza"
      text=" Od lat zajmuję się dermatologią, felis massa, aliquam sit amet justo eget, gravida vestibulum magna. Aenean hen." />
    
  </section>
);

export default SeoIcons;
