export const setupNavigationTree = (router) => {
    let tree = {}

    for (const item of router) {
        if (item.navigation.includes('tab')) tree[item.tab] = [item.container]
        else tree[item.tab].push(item.container)
    }

    return tree
}

export const newSetupNavigationTree = (router) => {
    let tree = {}

    for (const item of router) {
        if (item.type === 'tab') tree[item.component] = { icon: item.icon, stack: [] }
        else tree[item.tab].stack.push(item)
    }

    return tree
}

export const NavigationSelector = (company = null) => {
    switch (company) {
        case 'MAVIN':
            return require('../companies/mavin')
        case 'BVG':
            return require('../companies/bvg')
        default:
            return require('../core/navigation')
    }
}

export const getLoginComponent = (code = null) => {
    switch (code) {
        case 'MAVIN':
        case 'MAVINDEV':
            return require('../companies/mavin/screens/login').default
        case 'BVG':
            return require('../companies/bvg/screen/Login').default
        default:
            return require('../core/Login').default
    }
}