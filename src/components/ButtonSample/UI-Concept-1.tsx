import InputText from "@ui-system/inputs/Text"
import InputTextArea from "@ui-system/inputs/Textarea"
import InputSelect from "@ui-system/inputs/Select"
import ButtonFilled from "@ui-system/buttons/Filled"
import Selector from "@assets/Selector.svg?react"

function UI_Concept_1(props: { id: string }) {
  return (
    <div className="col-span-3 p-5 border border-gry-200 rounded-lg space-y-3">
      <div className="mt-2.5 text-sm">
        <h3 className="text-2xl font-bold tracking-tighter">Book of memories</h3>
        <p className="text-gry-900">Record some notes as a souvenir or dreams.</p>
      </div>
      <form className="space-y-3" id={props.id} onInvalid={e => console.log(e)}>
        <InputText
          type="text"
          defaultValue="My favorite food"
          label="Write your memories"
          name="memories"
          required
        />
        <InputTextArea
          defaultValue="I really like Pizza"
          label="Description"
          name="description"
          hintConfig={{ show: true, text: "Optional" }}
        />
        <InputSelect
          defaultValue="preference"
          label="Save in"
          name="saveIn"
          hintConfig={{ show: true, text: "Optional" }}
          iconConfig={{ icon: <Selector />, orientation: "right" }}
        >
          <option value="">None</option>
          <option value="preference">My preference</option>
        </InputSelect>
      </form>
      <ButtonFilled form="concept_1">Save</ButtonFilled>
    </div>
  )
}

export default UI_Concept_1