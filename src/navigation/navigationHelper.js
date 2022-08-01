export const setupNavigationTree = (router = stack) => {
    let tree = {}

    for (const item of router) {
        if (item.navigation.includes('tab')) tree[item.tab] = [item.container]
        else tree[item.tab].push(item.container)
    }

    return tree
}

export const NavigationSelector = (company = null) => {
    switch (company) {
        case 'BVG':
            return require('../companies/bvg')
        default:
            return require('../core/navigation')
    }
}

export const getLoginComponent = (code = null) => {
    switch (code) {
        case 'BVG':
            return require('../companies/bvg/screen/Login').default
        default:
            return require('../core/Login').default
    }
}