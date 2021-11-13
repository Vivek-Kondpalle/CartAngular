import { TestBed } from "@angular/core/testing"
import { HeaderComponent } from "./header.component"

describe("Header Component", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        })
    })

    it("should exist", () => {
        let fixture = TestBed.createComponent(HeaderComponent)
        let app = fixture.debugElement.componentInstance
        expect(app).toBeTruthy()
    })

    it("should contain <a> with FlipKart", () => {
        let fixture = TestBed.createComponent(HeaderComponent)
        let app = fixture.nativeElement
        let a = app.querySelector('a');
        expect(a.textContent).toEqual('FlipKart')
    })
})