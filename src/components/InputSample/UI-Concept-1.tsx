import InputText from "@ui-system/inputs/Text"
import InputTextArea from "@ui-system/inputs/Textarea"
import InputSelect from "@ui-system/inputs/Select"
import ArrowDown from "@assets/Chevron-right.svg?react"

function UI_Concept_1(props: { id: string }) {
  return (
    <div className="@container flex h-fit border border-gry-200 rounded-lg bg-white overflow-hidden">
      <img className="object-cover @max-[630px]:hidden" src="/image/01.avif" alt="img" width={250} height={356}/>
      <div className="flex-1 p-5 space-y-3">
        <div className="mt-2.5">
          <h1 className="text-2xl font-bold tracking-tighter">Book of memories</h1>
          <p className="text-sm font-light text-gry-700">/ Record some notes as a souvenir or dreams.</p>
        </div>

        <form className="space-y-3" id={props.id}>

          <InputText
            label="Write your memories"
            type="text"
            name="name"
            placeholder="Write here"
            autoComplete="off"
            required
            iconConfig={{ icon: "✍️" }}
          />

          <InputTextArea
            label="Description"
            name="description"
            placeholder="Write here"
            hintConfig={{ show: true, text: "Optional" }}
          />

          <div className="flex flex-wrap gap-3">

            <div className="flex-1 min-w-[min(100%,var(--spacing)*40)]">
              <InputSelect
                label="Save in"
                name="saveIn"
                iconConfig={{ icon: <ArrowDown className="rotate-90" />, orientation: "right" }}
                hintConfig={{ show: true, text: "Optional" }}
              >
                <option value="">None</option>
                <option value="note">Note</option>
                <option value="book">Book</option>
              </InputSelect>
            </div>

            <div className="flex-1 min-w-[min(100%,var(--spacing)*40)]">
              <InputText
                label="Your age"
                type="number"
                name="age"
                placeholder="19"
                required
                iconConfig={{ icon: "/" }}
              />
            </div>

          </div>

        </form>
      </div>
    </div>
  )
}

export default UI_Concept_1