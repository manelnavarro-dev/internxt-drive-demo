import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-layout__content">
        <Topbar />

        <main className="main-content">
          <div className="main-content__header">
            <div>
              <p className="main-content__eyebrow">Mi Drive</p>
              <h1>Archivos</h1>
            </div>

            <button className="main-content__view-button" type="button">
              Vista lista
            </button>
          </div>

          <section className="files-placeholder">
            <p>Aquí aparecerán los archivos.</p>
          </section>
        </main>
      </div>
    </div>
  )
}