import { connect } from 'react-redux'
import Input from '../input'
import { TalkToNPC, trackInput } from '../../actions/actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  //console.log(ownProps.inputVal)
  return {

    submitClick: (text) => dispatch(TalkToNPC(text, ownProps.game_id)),
    trackChange: (val) => dispatch(trackInput(val))
  }
}

const InputContainer = connect(null, mapDispatchToProps)(Input)

export default InputContainer
