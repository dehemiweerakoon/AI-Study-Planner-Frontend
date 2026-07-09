function RoutePage({ eyebrow, title, description, children }) {
  return (
    <section className="route-page">
      <div className="route-card">
        {eyebrow ? <p className="route-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="route-description">{description}</p> : null}
        {children}
      </div>
    </section>
  )
}

export default RoutePage
