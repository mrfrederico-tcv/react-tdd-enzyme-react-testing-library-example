import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer'
import { addSerializer } from 'jest-specific-snapshot'

import 'jest-styled-components'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

addSerializer(styleSheetSerializer)
