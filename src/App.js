import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Beginner Full-Stack Cheat Sheet</h1>
        <nav>
          <ul>
            <li><a href="#html">HTML</a></li>
            <li><a href="#css">CSS</a></li>
            <li><a href="#javascript">JavaScript</a></li>
            <li><a href="#git">Git</a></li>
            <li><a href="#react">React</a></li>
            <li><a href="#java">Java</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <section id="file">
            <h2>File Directory</h2>
            <p>Structure your files like this for easy navigation:</p>
            <ul>
                <li>index.html</li>
                <li>resources/
                    <ul>
                        <li>css/
                            <ul>
                                <li>index.css</li>
                            </ul>
                        </li>
                        <li>js/
                            <ul>
                                <li>app.js</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>assets/
                    <ul>
                        <li>images/</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section id="html">
          <h2>HTML</h2>
          <h3><strong>Basic Structure</strong></h3>
            <ul>
                <li><code>&lt;!DOCTYPE&gt;</code> - Declaration to inform the browser of the document type.</li>
                <li><code>&lt;html&gt;</code> - Root element of the document, contains all other elements.</li>
                <li><code>&lt;head&gt;</code> - Container for metadata, placed before <code>&lt;body&gt;</code>.</li>
                <li><code>&lt;body&gt;</code> - Contains the visible content of the webpage.</li>
                <li><code>&lt;title&gt;</code> - Defines the title of the document, shown in the browser's title bar.</li>
            </ul>

            <h3><strong>Common Elements</strong></h3>
            <ul>
                <li><code>&lt;h1&gt; to &lt;h6&gt;</code> - Define headings, <code>&lt;h1&gt;</code> is the largest, <code>&lt;h6&gt;</code> the smallest.</li>
                <li><code>&lt;p&gt;</code> - Defines a paragraph, browsers add space before and after each <code>&lt;p&gt;</code>.</li>
                <li><code>&lt;a href=""&gt;</code> - Defines a hyperlink. The <code>href</code> attribute specifies the URL.</li>
                <li><code>&lt;img src=""&gt;</code> - Embeds an image. The <code>src</code> attribute specifies the image source.</li>
                <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> - Define unordered (bulleted) and ordered (numbered) lists.</li>
            </ul>

            <h3><strong>Forms</strong></h3>
            <ul>
                <li><code>&lt;form&gt;</code> - Container for user input elements like text fields, checkboxes, etc.</li>
                <li><code>&lt;input&gt;</code> - Defines an input field, which can have different types like text, password, or email.</li>
                <li><code>&lt;label&gt;</code> - Provides a label for form elements, useful for accessibility.</li>
                <li><code>&lt;button&gt;</code> - Defines a clickable button.</li>
                <li><code>&lt;select&gt;</code> - Creates a drop-down list for users to select options.</li>
                <li><code>&lt;textarea&gt;</code> - Defines a multi-line text input.</li>
            </ul>

            <h3><strong>Semantic Tags</strong></h3>
            <ul>
                <li><code>&lt;header&gt;</code> - Container for introductory content or navigational links.</li>
                <li><code>&lt;nav&gt;</code> - Defines a set of navigation links.</li>
                <li><code>&lt;section&gt;</code> - Divides the document into sections for better readability.</li>
                <li><code>&lt;article&gt;</code> - Defines independent, self-contained content.</li>
                <li><code>&lt;footer&gt;</code> - Contains footer content like authorship or copyright information.</li>
            </ul>

            <h3><strong>Attributes</strong></h3>
            <ul>
                <li><code>class</code> - Used to apply CSS styles or manipulate elements with JavaScript.</li>
                <li><code>id</code> - Provides a unique identifier for an element.</li>
                <li><code>src</code> - Specifies the source URL for external content (e.g., images or scripts).</li>
                <li><code>href</code> - Specifies the URL for links or external resources (e.g., stylesheets).</li>
                <li><code>alt</code> - Provides alternate text for images for better accessibility.</li>
                <li><code>action</code> - Specifies the URL where form data is sent for processing.</li>
                <li><code>method</code> - Defines the HTTP method (GET or POST) for form submission.</li>
            </ul>
        </section>

        <section id="css">
          <h2>CSS</h2>
          <h3><strong>Basic Selectors</strong></h3>
            <ul>
                <li>Class Selector: <code>.classname { }</code> - Targets all elements with the specified class.</li>
                <li>ID Selector: <code>#idname { }</code> - Targets the element with the specified ID.</li>
                <li>Element Selector: <code>element { }</code> - Targets all elements of a specific type (e.g., <code>p { }</code> for all paragraphs).</li>
                <li>Universal Selector: <code>* { }</code> - Targets all elements in the document.</li>
            </ul>

            <h3><strong>Box Model</strong></h3>
            <ul>
                <li><strong>Margin</strong> - Space outside the element, between the element and other elements around it.</li>
                <li><strong>Border</strong> - Line around the element, between the margin and padding.</li>
                <li><strong>Padding</strong> - Space inside the element, between the content and border.</li>
                <li><strong>Content</strong> - The actual content inside the element (e.g., text, images).</li>
            </ul>

            <h3><strong>Positioning</strong></h3>
            <ul>
                <li><strong>Static</strong> - Default position; elements are positioned in the normal document flow.</li>
                <li><strong>Relative</strong> - Positioned relative to its normal position.</li>
                <li><strong>Absolute</strong> - Positioned relative to its nearest positioned ancestor.</li>
                <li><strong>Fixed</strong> - Positioned relative to the browser window, doesn't move when the page is scrolled.</li>
                <li><strong>Sticky</strong> - Toggles between relative and fixed positioning, depending on the scroll position.</li>
            </ul>

            <h3><strong>Flexbox</strong></h3>
            <ul>
                <li><code>display: flex;</code> - Enables flexbox on a container.</li>
                <li><code>justify-content</code> - Defines how items are aligned along the main axis (e.g., <code>center</code>, <code>space-between</code>).</li>
                <li><code>align-items</code> - Defines how items are aligned along the cross axis (e.g., <code>stretch</code>, <code>center</code>).</li>
                <li><code>flex-wrap</code> - Determines whether items should wrap onto multiple lines or not.</li>
            </ul>
        </section>

        <section id="javascript">
          <h2>JavaScript</h2>
          <h3><strong>Basic Syntax</strong></h3>
            <ul>
                <li><code>let</code> - Declares a block-scoped variable.</li>
                <li><code>const</code> - Declares a constant value, immutable after assignment.</li>
                <li><code>var</code> - Declares a function-scoped or globally-scoped variable (older practice, avoid using <code>var</code>).</li>
                <li><code>function</code> - Defines a function. Example:
                <pre>
                  <code>
                    {`function myFunction() {
                  console.log("Hello, world!");
                }`}
                  </code>
                </pre>
                </li>
            </ul>

            <h3><strong>DOM Manipulation</strong></h3>
            <ul>
                <li><code>document.getElementById()</code> - Gets an element by its ID.</li>
                <li><code>document.querySelector()</code> - Returns the first element that matches a specified CSS selector.</li>
                <li><code>addEventListener()</code> - Attaches an event handler to an element. Example:
                <pre>
                  <code>
                    {`element.addEventListener("click", function() {
                  alert("Element clicked!");
                });`}
                  </code>
                </pre>
                </li>
            </ul>

            <h3><strong>Array Methods</strong></h3>
            <ul>
                <li><code>push()</code> - Adds a new item to the end of an array.</li>
                <li><code>pop()</code> - Removes the last item from an array.</li>
                <li><code>map()</code> - Creates a new array by performing a function on each element in the original array.</li>
                <li><code>filter()</code> - Creates a new array with only elements that pass the test in a provided function.</li>
                <li><code>reduce()</code> - Reduces an array to a single value by executing a function for each value in the array.</li>
            </ul>

            <h3><strong>ES6 Features</strong></h3>
            <ul>
                <li><code>Arrow Functions</code> - Shorter syntax for function expressions:
                <pre>
                  <code>
                    {`const add = (a, b) => a + b;`}
                  </code>
                </pre>
                </li>
                <li><code>Template Literals</code> - Allows embedding expressions within strings:
                    <pre><code>const greeting = `Hello, ${name}!`;</code></pre>
                </li>
                <li><code>Destructuring</code> - Extracting values from arrays or properties from objects into distinct variables:
                    <pre><code>const [x, y] = [1, 2];</code></pre>
                </li>
            </ul>
        </section>

        <section id="git">
          <h2>Git</h2>
          <h3><strong>Common Commands</strong></h3>
            <ul>
                <li><code>git init</code> - Initializes a new Git repository.</li>
                <li><code>git add .</code> - Stages all changes for the next commit.</li>
                <li><code>git commit -m "message"</code> - Commits changes with a message.</li>
                <li><code>git push</code> - Pushes changes to the remote repository.</li>
                <li><code>git pull</code> - Fetches and merges changes from a remote repository.</li>
                <li><code>git clone</code> - Creates a local copy of a remote repository.</li>
                <li><code>git status</code> - Shows the status of changes in your working directory.</li>
            </ul>

            <h3><strong>Branching</strong></h3>
            <ul>
                <li><code>git branch</code> - Lists all branches in the repository.</li>
                <li><code>git checkout -b branchname</code> - Creates and switches to a new branch.</li>
                <li><code>git merge branchname</code> - Merges the specified branch into the current branch.</li>
            </ul>
        </section>

        <section id="react">
          <h2>React</h2>
          <h3><strong>Component Structure</strong></h3>
            <ul>
                <li><code>function MyComponent() { }</code> - Defines a functional component.</li>
                <li>JSX - React’s syntax extension, allows you to write HTML in JS:
                    <pre><code>&lt;div&gt;Hello, React!&lt;/div&gt;</code></pre>
                </li>
                <li><code>export default MyComponent;</code> - Exports the component for use in other files.</li>
            </ul>

            <h3><strong>State and Props</strong></h3>
            <ul>
                <li><code>useState()</code> - A React Hook to manage state. Example:
                    <pre><code>const [count, setCount] = useState(0);</code></pre>
                </li>
                <li>Props - Pass data from parent to child components. Example:
                    <pre><code>&lt;ChildComponent message="Hello" /&gt;</code></pre>
                </li>
            </ul>

            <h3><strong>Lifecycle Methods</strong></h3>
            <ul>
                <li><code>componentDidMount()</code> - Executes after the component is mounted to the DOM.</li>
                <li><code>componentDidUpdate()</code> - Executes when the component updates.</li>
                <li><code>componentWillUnmount()</code> - Executes right before the component is unmounted and destroyed.</li>
            </ul>
        </section>
        
        <section id="java">
          <h2>Java</h2>
          <h3><strong>Basic Syntax</strong></h3>
            <ul>
                <li><code>public static void main(String[] args)</code> - Entry point of a Java application.</li>
                <li><code>System.out.println()</code> - Prints to the console.</li>
                <li><code>int</code>, <code>double</code>, <code>String</code> - Data types in Java.</li>
                <li><code>for</code>, <code>while</code>, <code>if-else</code> - Control flow statements.</li>
            </ul>

            <h3><strong>OOP Principles</strong></h3>
            <ul>
                <li><strong>Encapsulation</strong> - Wrapping data and methods within a class.</li>
                <li><strong>Inheritance</strong> - Child class inherits properties of a parent class.</li>
                <li><strong>Polymorphism</strong> - Methods can be overridden to change behavior.</li>
                <li><strong>Abstraction</strong> - Hiding the internal implementation details.</li>
            </ul>

            <h3><strong>Common Classes</strong></h3>
            <ul>
                <li><code>ArrayList</code> - A resizable array implementation.</li>
                <li><code>HashMap</code> - A hash table-based implementation for storing key-value pairs.</li>
                <li><code>StringBuilder</code> - A mutable sequence of characters, useful for string manipulation.</li>
            </ul>
        </section>
      </main>

      <footer>
        <p>Cooper Braun | Gonzaga University</p>
      </footer>
    </div>
  );
}

export default App;
