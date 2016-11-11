import React from 'react'
import NPC from './NPC'
import InputContainer from './containers/InputContainer'

const Paxtonia = (props) => {
  var npcs = props.responses.map((response) => <NPC response={response} />)
  return (
    <div style={{opacity: props.opacity}} >
      You are a { props.hero_rep } hero. 
      { npcs }
      <InputContainer />
    </div>
  )
}

export default Paxtonia
