import InputText from "@ui-system/inputs/Text"

function UI_Concept_3() {
  return (
    <div className="flex-1 min-w-[min(100%,var(--spacing)*75)] h-fit p-5 border border-gry-200 rounded-lg bg-white space-y-3">
      <h1 className="text-2xl font-bold tracking-tighter">Login</h1>
      <InputText
        type="text"
        label="Username or email address"
        placeholder="MrSteve"
        name="username"
        autoComplete="off"
      />
      <InputText
        type="password"
        label="Password"
        placeholder="••••••••••"
        name="password"
        autoComplete="off"
      />
      <p className="text-sm">Are you a new user? <span className="text-pur-700">Register now</span></p>
    </div>
  )
}

export default UI_Concept_3