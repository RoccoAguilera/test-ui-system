import Select from "@ui-system/inputs/Select"

export default function Controller(props: {
  font: string,
  setFont: React.Dispatch<React.SetStateAction<string>>,
}) {

  return (
    <header className="font-inter max-w-screen-xl mt-2 mx-auto space-y-5">
      <div className="m-auto max-w-sm">
        <Select
          label="Set font-family"
          name="font-family"
          defaultValue={"inter"}
          autoFocus
          onChange={e => props.setFont(e.target.value)}
        >
          <option value="sans">Sans</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
          <option value="inter">Inter</option>
          <option value="poppins">Poppins</option>
          <option value="roboto">Roboto</option>
        </Select>
      </div>
    </header>
  )
}