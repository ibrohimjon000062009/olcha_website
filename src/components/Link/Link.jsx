import React from 'react'
import Brend from '../Brend/Brend'
import logo from '../../assets/image.apple/apple.png'
import sound  from '../../assets/image.apple/sound.png'
import media from '../../assets/image.apple/media.png'
import visual from '../../assets/image.apple/3d.png'
import samsung from '../../assets/image.samsung/samsung.png'
import laptop from '../../assets/laptop.png'
import tv from '../../assets/tv.png'
import monitor from '../../assets/monitor.png'
import balckberry from '../../assets/blackberry.jpg'








function Link () {


 const data = [
    { id: 1,
        wall: "" ,
        product_one_text:"actustick",
        product_two_text:"medisplayer", 
        product_three_text:"visual",
        logoImg: logo,
        productOneImg: sound,
        productTwoImg: media,
        productThreeImg: visual

    },
    {
        id: 2,
        wall: "" ,
        product_one_text:"tv",
        product_two_text:"laptop", 
        product_three_text:"monitor",
        logoImg: samsung,
        productOneImg: tv,
        productTwoImg: laptop,
        productThreeImg: monitor

    },
    {
        id: 3,
        wall: "" ,
        product_one_text:"actustick",
        product_two_text:"medisplayer", 
        product_three_text:"visual",
        logoImg: balckberry,
        productOneImg: sound,
        productTwoImg: media,
        productThreeImg: visual

    }
    
    
 ]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
        {data.map (( item, index) => (
            <Brend data={item} key={index} />
        ))};
      
    </div>
  )
}


export default Link
