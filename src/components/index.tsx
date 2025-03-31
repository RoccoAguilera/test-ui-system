import UI_Concept_2 from "./ButtonSample/UI-Concept-2"
import UI_Concept_3 from "./ButtonSample/UI-Concept-3"
import UI_Concept_4 from "./ButtonSample/UI-Concept-4"
import UI_Concept_5 from "./ButtonSample/UI-Concept-5"
import UI_Concept_1 from "./InputSample/UI-Concept-1"
import UI_Concept_6 from "./InputSample/UI-Concept-2"
import UI_Concept_7 from "./InputSample/UI-Concept-3"

function Main(props: { font: string }) {
  return (
    <main className={`${props.font} grid grid-cols-10 gap-2 items-start max-w-screen-xl mx-auto mt-2 space-y-5`}>

      <div className="col-span-3 flex flex-col gap-2 max-[900px]:hidden">
        <UI_Concept_1 id="concept_1" />
        <UI_Concept_7 />
      </div>
      <div className="col-start-4 col-span-full grid grid-cols-subgrid gap-2 max-[900px]:col-start-1">
        <UI_Concept_2 />
        <div className="col-span-full min-[900px]:hidden">
          <UI_Concept_1 id="concept_2" />
        </div>
        <div className="col-span-full flex flex-wrap gap-2">
          <div className="@container grow-3 space-y-2 min-w-[min(100%,var(--spacing)*80)]">
            <UI_Concept_3 />
            <UI_Concept_5 />
            <div className="min-[900px]:hidden">
              <UI_Concept_7 />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 min-w-[min(100%,var(--spacing)*58)] h-fit">
            <UI_Concept_4 />
            <UI_Concept_6 />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main