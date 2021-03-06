import Search from '@/app/pages/SearchResults/SearchResults.vue'
import { cloneProductionStore, Wrap } from '../../../../../test/helpers'
import FilmsPage from '../../../__page_objects__/ItemsPageObject'
import { fakeFilms } from '../../../services/repositories/__mocks__/fake-films'
jest.mock('@/app/services/repositories/tmdb-repository')

describe('SearchResults Results', () => {
  let page, wrapper, store
  beforeEach(async () => {
    store = cloneProductionStore()
    store.state.searchResults = fakeFilms
    wrapper = Wrap(Search)
      .withStore(store)
      .withProps({ isLoading: false, onClick: jest.fn })
      .mount()
    page = new FilmsPage(wrapper)
  })

  it('renders search', async() => {
    fakeFilms.map(film => page.contains(film.title))
  })
})
