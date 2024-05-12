type Props = {
    name: string;
}
const HolaMundo = ({name}: Props) => {
  return (
    <div>Hola {name}</div>
  )
}

export default HolaMundo