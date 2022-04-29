import { SLikedBy, SPostFooter } from '../style'
import Avatar from '@components/shared/Avatar'

function PostFooter() {
  return (
    <SPostFooter>
       <SLikedBy>
          <span> <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' /> </span>
          <span> <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' /> </span>
          <span> <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' /> </span>
          <span> <Avatar src='/avatar/demo-model.jpg' username='raihanhosen011' /> </span>

          <p> Liked by <b>Enayeet Chowdhury</b> and <b>raihanhosen0</b> </p>
       </SLikedBy>
    </SPostFooter>
  )
}

export default PostFooter