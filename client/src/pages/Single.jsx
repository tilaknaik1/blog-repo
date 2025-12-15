import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link} from 'react-router-dom'
import Menu from "../components/Menu.jsx"; 

const Single = () => {
  return (
    <div className='single'>
    <div className="content">
    <img src="https://images.wallpaperscraft.com/image/single/forest_trees_mountain_318602_1920x1080.jpg" alt=""/>

    <div className="user">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/044/277/175/small_2x/young-man-standing-holding-laptop-and-looking-at-camera-on-isolated-transparent-background-free-png.png" alt=""/>
    <div className="info">
      <span> Steve </span>
      <p> posted 2 days ago</p>
      <div>
<div className="edit">
  <Link to={`/Write?edit=2`}>
  <img src={Edit} alt=""/>
  </Link>
  <img src={Delete} alt=""/>
</div>
      </div>
    </div>
    </div>
<h1> “Where the Endless Forest Meets the Quiet Majesty of the Mountain Peaks” </h1>
<p>The scene captures a tranquil mountain landscape where towering evergreens stretch endlessly across the rolling hills. Soft light filters through the forest canopy, casting a gentle glow over the dense foliage. In the distance, a majestic mountain rises, its silhouette softened by a thin veil of mist that settles delicately along its slopes. The colors blend harmoniously, creating a sense of calm and untouched natural beauty. Every element of the landscape feels intentional, as though nature has arranged it in perfect balance. The quiet stillness invites the viewer to pause and breathe in the serenity surrounding the scene.</p>

<p>As the viewer’s gaze travels deeper into the image, the vastness of the wilderness becomes evident. The layers of trees create a rhythmic pattern, drawing the eye toward the serene mountain that anchors the horizon. The atmosphere feels cool and refreshing, as though the forest breathes in unison with the surrounding landscape. This peaceful coexistence of forest and mountain evokes a feeling of escape, inviting the mind to wander into the quiet embrace of nature. Subtle shifts of light and shadow add depth, hinting at hidden trails and untold stories within the woods. It becomes a landscape not just to see, but to step into and explore with imagination.</p>
<p>As the light continues its gentle dance across the landscape, the scene takes on an almost ethereal quality, as if suspended between reality and a quiet dream. A faint breeze rustles through the treetops, carrying with it the crisp scent of pine and the distant whisper of mountain air. The interplay of movement and stillness creates a harmony that feels both grounding and liberating. In this serene moment, time seems to slow, allowing the viewer to fully absorb the landscape’s quiet majesty. The mountains, trees, and mist come together to form a sanctuary of solitude—a place where the soul can find refuge and the mind can drift freely amid nature’s unspoken poetry.In this serene moment, time seems to slow, allowing the viewer to fully absorb the landscape’s quiet majesty. The mountains, trees, and mist come together to form a sanctuary of solitude—a place where the soul can find refuge and the mind can drift freely amid nature’s unspoken poetry. Here, every breath feels renewed, as if the wilderness itself offers a gentle reminder of life’s simplicity. Even the silence carries meaning, wrapping the scene in a calm that lingers long after the gaze has shifted away.</p>
</div>
 <Menu />   
    </div>
    
      
  )
}

export default Single;
