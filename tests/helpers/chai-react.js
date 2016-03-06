import React, { Component } from 'react';
import sinon from 'sinon';


export default (chai, utils) => {
  const Assertion = chai.Assertion;

  /**
   * @example
   * expect(Component).to.have.been.rendered;
   */
  Assertion.addProperty('rendered', function expectComponentRendered() {
    const Component = this._obj;

    function constructMessage({not}) {
      return `Expected component '${Component.displayName}' ` +
             `to ${not ? 'not ' : ''}have been rendered`;
    }

    this.assert(Component.renderSpy.called,
                constructMessage({not: false}), constructMessage({not: true}));
  });


  /**
   * @param {Object} props
   *
   * @example
   * expect(Component).to.have.been.renderedWith({foo: 'bar'});
   */
  Assertion.addMethod('renderedWith', function expectComponentRenderedWith(
     props) {
    const Component = this._obj;

    const renderSpy = Component.renderSpy;

    function constructMessage({not}) {
      let msg = `Expected component '${Component.displayName}' ` +
                `to ${not ? 'not ' : ''}have been rendered with ` +
                `${renderSpy.printf('%*', props)}`;

      if (renderSpy.called) {
        const renders = renderSpy.args.map(render =>
          // Each render is an array with a single element, the props.
          renderSpy.printf('%*', render[0])).join('\n');

        msg += `\n\nThe component has so far been rendered with:\n` + renders;
      }

      return msg;
    }

    this.assert(renderSpy.calledWithMatch(props),
                constructMessage({not: false}), constructMessage({not: true}));
  });
};


export function fakeComponentFactory({name} = {name: 'FakeComponent'}) {
  const _renderSpy = sinon.spy();

  return class FakeComponent extends Component {
    static displayName = name;

    static renderSpy = _renderSpy;

    static reset() {
      _renderSpy.reset();
    };

    render() {
      _renderSpy(this.props);

      return <div>I am a fake component, here to spy on you!</div>;
    }
  };
};
