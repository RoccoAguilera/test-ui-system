import ButtonAction from "@ui-system/buttons/Action"
import ButtonBorder from "@ui-system/buttons/Border"
import ButtonEmpty from "@ui-system/buttons/Empty"
import Plus from "@assets/Plus.svg?react"
import Settings from "@assets/Settings.svg?react"
import Search from "@assets/Search.svg?react"
import Arrow from "@assets/Chevron-right.svg?react"

function UI_Concept_2() {
  return (
    <div className="@container col-span-full flex flex-wrap justify-center p-2.5 border border-gry-200 rounded-lg">
      <div className="flex gap-xs">
        <div className="min-w-35 @max-2xl:hidden">
          <ButtonAction>Create Event<span><Plus strokeWidth={1.5} /></span></ButtonAction>
        </div>
        <div className="@max-2xl:hidden">
          <ButtonBorder>Today</ButtonBorder>
        </div>
        <div className="@min-2xl:hidden @max-sm:hidden">
          <ButtonAction behavior="onlyIcon" aria-label="Create event"><span><Plus strokeWidth={1.5} /></span></ButtonAction>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4">
        <ButtonEmpty behavior="onlyIcon">
          <Arrow className="mx-auto rotate-180" strokeWidth={1.5} />
        </ButtonEmpty>
        <span className="tracking-tighter text-nowrap">January 1, 2024</span>
        <ButtonEmpty behavior="onlyIcon">
          <Arrow className="mx-auto" strokeWidth={1.5} />
        </ButtonEmpty>
      </div>
      <div className="flex gap-xs">
        <div className="@min-sm:hidden">
          <ButtonAction behavior="onlyIcon" aria-label="Create event"><span><Plus strokeWidth={1.5} /></span></ButtonAction>
        </div>
        <ButtonBorder behavior="onlyIcon" aria-label="Search"> <Search /> </ButtonBorder>
        <ButtonBorder behavior="onlyIcon" aria-label="Settings"> <Settings /> </ButtonBorder>
      </div>
    </div>
  )
}

export default UI_Concept_2