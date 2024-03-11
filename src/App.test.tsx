import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "./App"
import { RemoveButton } from "./assets/scripts/removeButton"

describe(App.name, () => {
  test("should render", () => {
    render(<App />)
    expect(screen.getByText("Checkout")).toBeInTheDocument()
  })
})

/* Test not working due to incorrect mocking
describe(ProductLine.name, () => {
  test("Price of 2 loafers should show correct total: 161.98", () => { //With 10% rebate
      const product: Product = productsData[0]
      const quantity = 2
      const totalPrice = (product.price * quantity * (1 - product.rebatePercent / 100)).toFixed(2)
      render(<ProductLine product={product} handleRemoveItem={() => {}} updateTotalPrice={() => {}}/>)
      expect(screen.getByText(totalPrice)).toBeInTheDocument()
  })
})
*/

describe(RemoveButton.name, () => {
  test("Should change the basketicon on hover", () => {
    render(<RemoveButton onClick={() => {}}/>)
    const button = screen.getByRole('button')
    const openTrashcanImage  = screen.getByRole('img') as HTMLImageElement
    fireEvent.mouseOver(button)
    expect(openTrashcanImage.src).toContain('openTrashcan.png')
  })
})