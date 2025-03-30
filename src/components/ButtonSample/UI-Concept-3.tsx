import ButtonBorder from "@ui-system/buttons/Border"
import ButtonEmpty from "@ui-system/buttons/Empty"
import Dots from "@assets/Dots-vertical.svg?react"

function UI_Concept_3() {

  const collectionObj = [
    { id: "01", name: "Adison Press", img: "Avatar" },
    { id: "02", name: "Carter Geidt", img: "Avatar-1" },
    { id: "03", name: "Omar Botosh", img: "Avatar-2" },
    { id: "04", name: "Paityn Botosh", img: "Avatar-3" },
  ]

  return (
    <div className="@container border border-gry-200 rounded-lg">
      <div className="flex items-center p-5">
        <p className="flex-1 text-lg font-medium tracking-tighter">Friend request</p>
        <ButtonEmpty behavior="onlyIcon">
          <Dots className="mx-auto rotate-180" strokeWidth={1.5} />
        </ButtonEmpty>
      </div>
      <div>
        {collectionObj && collectionObj.map(item => <Panel key={item.id} name={item.name} img={item.img} />)}
      </div>
    </div>
  )
}

function Panel(props: { name: string, img: string }) {
  return (
    <div className="flex gap-xs px-4 py-2.5 border-b border-gry-100 last:border-none @max-[330px]:flex-col">
      <div className="flex-1 flex items-center gap-2.5">
        <img src={`/image/${props.img}.png`} alt={`profile of ${props.name}`} width={35} height={35} />
        <span className="text-sm"> {props.name} </span>
      </div>
      <div className="flex gap-xs">
        <ButtonBorder>Accept</ButtonBorder>
        <ButtonBorder>Reject</ButtonBorder>
      </div>
    </div>
  )
}

export default UI_Concept_3