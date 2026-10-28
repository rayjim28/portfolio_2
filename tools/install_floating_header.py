"""Make the existing portfolio navigation float without altering its structure."""
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
CSS=ROOT/'src/styles/globals.css'
MARKER='/* FLOATING NAVIGATION - PORTRAIT CLEARANCE */'
STYLES='''
/* FLOATING NAVIGATION - PORTRAIT CLEARANCE */
/* No opaque strip or dividing rule; only the navigation items float above the hero. */
.site-header{
  position:absolute;
  inset:0 0 auto;
  width:100%;
  height:66px;
  background:transparent;
  border:0;
  box-shadow:none;
  z-index:90;
}
/* The hero now starts at the top of the viewport. The portrait starts below
   the 66px navigation so the nav never crosses the top of the subject's head. */
.hero{
  margin-top:0;
  padding-top:66px;
  height:clamp(480px,34vw,550px);
}
.hero-photo{
  top:76px;
  bottom:0;
  height:calc(100% - 76px);
}
.hero-photo-image{
  object-fit:contain;
  object-position:right bottom;
  transform:none;
}
.hero-shade{
  background:linear-gradient(90deg,#06111d 0%,#06111d 27%,rgba(6,17,29,.97) 39%,rgba(6,17,29,.62) 51%,rgba(6,17,29,.08) 69%,transparent 85%);
}
/* Preserve the fully opaque mobile menu when the user expands it. */
@media(max-width:900px){
  .site-header{position:absolute;}
  .primary-nav.is-open{background:#0b1a2b;}
}
@media(max-width:700px){
  .site-header{height:66px;}
  .hero{margin-top:0;padding-top:0;min-height:0;height:auto;}
  .hero-photo{top:76px;height:285px;width:100%;left:0;right:0;}
  .hero-photo-image{object-fit:cover;object-position:73% top;}
  .hero-inner{padding-top:380px;}
  .hero-shade{background:linear-gradient(0deg,#06111d 0%,#06111d 16%,rgba(6,17,29,.94) 39%,rgba(6,17,29,.08) 82%);}
}
'''

def main():
    if not CSS.is_file(): raise SystemExit('Could not find src/styles/globals.css. Run inside your portfolio project.')
    existing=CSS.read_text(encoding='utf-8')
    if MARKER in existing:
        print('Floating navigation already installed. No changes needed.')
        return
    if '.site-header' not in existing or '.hero-photo' not in existing:
        raise SystemExit('Unknown portfolio layout. No changes made.')
    backup=CSS.with_suffix('.css.pre-floating-nav.bak')
    if not backup.exists(): backup.write_text(existing,encoding='utf-8')
    CSS.write_text(existing.rstrip()+'\n\n'+STYLES+'\n',encoding='utf-8')
    print('Updated',CSS.relative_to(ROOT))
    print('Backup saved:',backup.name)

if __name__=='__main__': main()
