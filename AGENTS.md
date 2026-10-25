<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- O banner institucional deve ser renderizado com HTML/CSS e ativos locais, evitando dependência de uma imagem remota; isso mantém a abertura confiável.
- Storefront publication predicates and category filtering live in a shared browser-safe content module so draft sections never bypass approval checks.
- Product cards show a static media container (looped muted MP4 when provided, else cover image); no demo modals, to avoid layout shift and input lag.
- Use Vitest for frontend unit tests so test imports resolve during project checks.
- Landing media uses a shared aspect-ratio container with null sources until verified assets arrive; this prevents placeholder text, misleading screens and layout shifts.
- Landing feature publication uses explicit approval and a four-item limit in a browser-safe content module; this keeps undefined capabilities off the public page.
