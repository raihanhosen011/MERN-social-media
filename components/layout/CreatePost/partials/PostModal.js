import React, { useState } from 'react'
// import Picker from 'emoji-picker-react'
import { UilImage, UilKid, UilTimes } from '@iconscout/react-unicons'

import Modal from '../../../shared/Modal'
import Avatar from '@components/shared/Avatar'
import { SProfile } from '@components/layout/Sidebar/style'
import { SPostModal, SPostOptionsBar, SMedia, SActivity, SComposeOptions, SComposeSubmit, SEmojiPicker, SMediaShow, SSingleMedia } from '../style'

function PostModal({ open, setOpen }) {
  const [medias, setMedias] = useState([]) 
  const [statusText, setStatusText] = useState('')  
  // const [showEmoji, setShowEmoji] = useState(false)  
  
  // "onEmojiClick" is used to set emoji inside of text
  // function onEmojiClick(e, emojiObject){
  //   let newText = statusText + emojiObject.emoji
  //   setStatusText(newText)  
  // }

  // "handleMedia" is used to show selected media
  function handleMedia(e){
    setMedias([...medias, ...e.target.files])
  }
  
  // "handleRemove" is used to remove media item 
  function handleRemove(idx){
     let newMedia = medias.filter((e) => medias.indexOf(e) !== idx)
     setMedias(newMedia)
  }

  return (
    <>
      {open &&
        <Modal handleClose={() => setOpen(false)} >
            <SPostModal>
                <SProfile>
                  <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' />
                  
                  <div>
                     <h4>Raihan Hosen</h4>
                     
                     <select>
                        <option value='public' > Public</option>
                        <option value='frainds' > Followers</option>
                        <option value='privat' > Only me </option>
                     </select>
                  </div>
                </SProfile>    

                <textarea name='status' value={statusText} onChange={(e) => setStatusText(e.target.value)} placeholder="What's on your mind, Raihan?" />          

                <SPostOptionsBar>
                    {medias.length > 0 && <SMediaShow>
                      {medias?.map((file, idx) => <SingleMedia click={() => handleRemove(idx)} file={file} />)}
                    </SMediaShow>}

                    <SComposeOptions>
                        <SMedia className='compose-option' >
                            <UilImage />
                            <span> Photos/Videos </span>  

                            <input type='file' onChange={handleMedia} accept="video/*,image/*" multiple />  
                        </SMedia> 

                        <SActivity onClick={() => setShowEmoji(true)} className='compose-option' >
                            <UilKid />
                            <span> Emoji </span>  
                        </SActivity>

                        <SComposeSubmit className='button' disabled={statusText.length || medias.length === 0} > submit </SComposeSubmit>

                        {/* {showEmoji && <SEmojiPicker>
                            <UilTimes onClick={() => setShowEmoji(false)} />
                            <Picker onEmojiClick={onEmojiClick} />            
                        </SEmojiPicker>}    */}
                    </SComposeOptions>  
                </SPostOptionsBar> 
            </SPostModal>
        </Modal>
      }    
    </> 
  )
}


const SingleMedia = ({ file, click }) => {
  return (
    <SSingleMedia>
       <UilTimes onClick={click} />

       {file.type.match(/video/i)
          ?  <video controls autoplay src={URL.createObjectURL(file)} alt='selected' /> 
          :  <img src={URL.createObjectURL(file)} alt='selected' /> 
       }  
    </SSingleMedia> 
  ) 
}

export default PostModal