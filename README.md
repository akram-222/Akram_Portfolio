# Akram Portfolio

### This repo is divided into 6 pages:

> Some of these pages were restricted and required an auth access token to be opened (for example, the Dashboard), while others were not.


 ```mermaid
 flowchart LR
    1-Dashboard-->2-Projects
    2-Projects-->3-Blog
    3-Blog-->4-About
    4-About-->5-Status
    5-Status-->6-Settings
    click A "https://www.github.com" _blank
    click B "https://www.github.com" "Open this in a new tab" _blank
    click C href "https://www.github.com" _blank
    click D href "https://www.github.com" "Open this in a new tab" _blank
 ```

## 🛠️ Used Languages

<p>
 <a href="#"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-1572B6.svg?logo=typescript&logoColor=white"></a>
 <a href="#"><img alt="React" src="https://img.shields.io/badge/React-20232a.svg?logo=react&logoColor=%2361DAFB"></a>
 <a href="#"><img alt="Tailwind" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white"></a>
 <a href="#"><img alt="Firebase" src="https://img.shields.io/badge/Firbase-010101.svg?logo=firebase&logoColor=yellow"></a>
 <a href="#"><img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white"></a>
    <a href="#"><img alt="Git" src="https://img.shields.io/badge/Git-F05033.svg?logo=git&logoColor=white"></a>
    <a href="#"><img alt="Stack Overflow" src="https://img.shields.io/badge/-Stack%20Overflow-FE7A16?logo=stack-overflow&logoColor=white"></a>
    <a href="#"><img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?logo=visual-studio-code&logoColor=white"></a>
</p>

  
  
  
  
  
  
  
  

---







 ```mermaid
 requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    functionalRequirement test_req2 {
    id: 1.1
    text: the second test text.
    risk: low
    verifymethod: inspection
    }

    performanceRequirement test_req3 {
    id: 1.2
    text: the third test text.
    risk: medium
    verifymethod: demonstration
    }

    interfaceRequirement test_req4 {
    id: 1.2.1
    text: the fourth test text.
    risk: medium
    verifymethod: analysis
    }

    physicalRequirement test_req5 {
    id: 1.2.2
    text: the fifth test text.
    risk: medium
    verifymethod: analysis
    }

    designConstraint test_req6 {
    id: 1.2.3
    text: the sixth test text.
    risk: medium
    verifymethod: analysis
    }

    element test_entity {
    type: simulation
    }

    element test_entity2 {
    type: word doc
    docRef: reqs/test_entity
    }

    element test_entity3 {
    type: "test suite"
    docRef: github.com/all_the_tests
    }


    test_entity - satisfies -> test_req2
    test_req - traces -> test_req2
    test_req - contains -> test_req3
    test_req3 - contains -> test_req4
    test_req4 - derives -> test_req5
    test_req5 - refines -> test_req6
    test_entity3 - verifies -> test_req5
    test_req <- copies - test_entity2

```
