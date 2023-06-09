import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const _msg = new Notyf()

export function success(m) {
  _msg.success({
    message: `${m}`,
    duration: 1000,
    background: '#00C853',
    icon: false,
    ripple: true,
    dismissible: false,
    position: {
      x: 'right',
      y: 'top'
    }
  })
}

export function info(m) {
  _msg.success({
    message: `${m}`,
    duration: 3000,
    background: '#0091EA',
    icon: false,
    ripple: true,
    dismissible: false,
    position: {
      x: 'right',
      y: 'top'
    }
  })
}

export function warn(m) {
  _msg.success({
    message: `${m}`,
    duration: 7000,
    background: '#FFC107',
    icon: false,
    ripple: true,
    dismissible: false,
    position: {
      x: 'right',
      y: 'top'
    }
  })
}

export function error(m) {
  _msg.success({
    message: `${m}`,
    duration: 10000,
    background: '#F44336',
    icon: false,
    ripple: true,
    dismissible: false,
    position: {
      x: 'right',
      y: 'top'
    }
  })
}
