import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen: boolean = false;
  isActive: boolean = false;
  header: ElementRef;
  activeItem: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initAosAnimation();
    this.closeMenuByPhoneMode();
  }

  initAosAnimation(): void {
    AOS.init({
      duration: 2000,
    });
  }

  closeMenuByPhoneMode(): void {
    const links = document.querySelectorAll('.header__links a');
    links.forEach((link) => {
      this.renderer.listen(link, 'click', () => {
        this.toggleHamburgerMenu();
      });
    });
  }

  toggleHamburgerMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen && window.innerWidth < 881) {
      this.renderer.addClass(document.body, 'stop-scrolling');
    } else {
      this.renderer.removeClass(document.body, 'stop-scrolling');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScrollHandler() {
    if (window.scrollY > 0) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
