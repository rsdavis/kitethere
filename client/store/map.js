
export const state = () => ({
  bounds: {
    northEast: { lat: null, lng: null },
    southWest: { lat: null, lng: null }
  },
  center: { lat: null, lng: null }
})

export const getters = {
  bounds (state) {
    var c = state.center
    var b = JSON.parse(JSON.stringify(state.bounds))
    if (b && c && b.southWest.lng > c.lng) b.southWest.lng -= 360
    if (b && c && b.northEast.lng < c.lng) b.northEast.lng += 360
    return b
  }
}

export const mutations = {
  setBounds (state, bounds) { state.bounds = bounds },
  setCenter (state, value) { state.center = value }
}

const actions = {
  setBounds (context, bounds) { context.commit('setBounds', bounds) },
  setCenter (context, value) { context.commit('setCenter', value) }
}
